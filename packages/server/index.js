const AWS = require('aws-sdk');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const logMiddleware = require('@bufferapp/logger/middleware');
const buffermetricsMiddleware = require('@bufferapp/buffermetrics/middleware');
const bugsnag = require('bugsnag');
const fs = require('fs');
const { join } = require('path');
const shutdownHelper = require('@bufferapp/shutdown-helper');
const cookieParser = require('cookie-parser');
const {
  setRequestSessionMiddleware,
  validateSessionMiddleware,
} = require('@bufferapp/session-manager');
const connectDatadog = require('@bufferapp/connect-datadog');
const { apiError } = require('./middleware');
const request = require('request');
const controller = require('./lib/controller');
const rpcHandler = require('./rpc');
const checkToken = require('./rpc/checkToken');


const app = express();
const server = http.createServer(app);

let staticAssets = {
  'bundle.js': '/static/bundle.js',
};

// NOTE: Bugsnag will not notify in local setup with current weback configuration
// https://docs.bugsnag.com/platforms/browsers/faq/#4-code-generated-with-eval-e-g-from-webpack
let bugsnagScript = '';
// Note: Temporary diable fullStory due GDPR.
let fullStoryScript = '';
// This is for the Headway widget
const headwayScript = '<script src="//cdn.headwayapp.co/widget.js"></script>';

const isProduction = process.env.NODE_ENV === 'production';
app.set('isProduction', isProduction);

if (isProduction) {
  app.use(connectDatadog({
    response_code: true,
    bufferRPC: true,
    tags: ['app:analyze', 'service:web'],
  }, 'dd-agent.default'));
  staticAssets = JSON.parse(fs.readFileSync(join(__dirname, 'staticAssets.json'), 'utf8'));
  if (process.env.BUGSNAG_KEY) {
    bugsnag.register(process.env.BUGSNAG_KEY);
    app.set('bugsnag', bugsnag);
    // NOTE: Bugsnag will not notify in local setup with current weback configuration
    // https://docs.bugsnag.com/platforms/browsers/faq/#4-code-generated-with-eval-e-g-from-webpack
    bugsnagScript = `<script src="//d2wy8f7a9ursnm.cloudfront.net/bugsnag-3.min.js"
                              data-apikey="${process.env.BUGSNAG_KEY}"></script>`;
  }
  fullStoryScript = `<script>
  window['_fs_debug'] = false;
  window['_fs_host'] = 'fullstory.com';
  window['_fs_org'] = '9F6GW';
  window['_fs_namespace'] = 'FS';
  (function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
    o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(c,d,i){if(!c || document.cookie.match('fs_uid=[\`;\`]*\`[\`;\`]*\`[\`;\`]*\`')){
    d=n.domain;while(1){n.cookie='fs_uid=;domain='+d+
    ';path=/;expires='+new Date(0).toUTCString();i=d.indexOf('.');if(i<0)break;d=d.slice(i+1)}}};
  })(window,document,window['_fs_namespace'],'script','user');
  </script>`;
} else {
  staticAssets = {
    'bundle.js': '//analyze.local.buffer.com:8080/static/bundle.js',
  };
}

const html = fs.readFileSync(join(__dirname, 'index.html'), 'utf8')
  .replace('{{{bundle}}}', staticAssets['bundle.js'])
  .replace('{{{bugsnagScript}}}', bugsnagScript)
  .replace('{{{headwayScript}}}', headwayScript);

app.use(logMiddleware({ name: 'BufferAnalyze' }));
app.use(cookieParser());

app.use('*', (req, res, next) => {
  const analyzeApiAddr = req.get('ANALYZE-API-ADDR') || process.env.ANALYZE_API_ADDR;
  app.set('analyzeApiAddr', analyzeApiAddr);
  next();
});


app.get('/health-check', controller.healthCheck);
const favicon = fs.readFileSync(join(__dirname, 'favicon.ico'));
app.get('/favicon.ico', (req, res) => res.send(favicon));

// All routes after this have access to the user session
// app.use(session.middleware);
app.use(setRequestSessionMiddleware({
  production: isProduction,
  sessionKeys: ['global', 'analyze'],
}));

app.use(bodyParser.json());
app.post('/rpc', checkToken, rpcHandler);

app.use(buffermetricsMiddleware({
  name: 'Buffer-Analyze',
  debug: !isProduction,
  trackVisits: true,
}));


app.use(validateSessionMiddleware({
  production: isProduction,
  requiredSessionKeys: ['analyze.accessToken'],
}));

app.get('/report_to_pdf', (req, res) => {
  const params = {
    FunctionName: 'reportToPDF',
    Payload: JSON.stringify({
      url: req.query.url,
      orientation: 'portrait',
      javascriptDelay: 30000,
      cookie: {
        name: 'buffer_session',
        value: req.cookies.buffer_session,
      },
    }),
    LogType: 'Tail',
  };
  const lambda = new AWS.Lambda({
    region: 'us-east-1',
  });
  const encodedFilename = `${encodeURIComponent(req.query.name)}.pdf`;
  lambda.invoke(params, (err, data) => {
    res.header('Content-disposition', `inline; filename=${req.query.name}.pdf`);
    if (err) {
      res.send(err);
    } else {
      const payload = JSON.parse(data.Payload);
      res.type('application/pdf');
      res.header('Content-disposition', `inline; filename=${req.query.name}.pdf; filename*=utf-8''${encodedFilename}`);
      request(payload.url).pipe(res);
    }
  });
});

app.get('*', (req, res) => {
  res.send(html);
});

app.use(apiError);

server.listen(80, () => console.log('listening on port 80')); // eslint-disable-line no-console

shutdownHelper.init({ server });
