module.exports.apiError = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log('-----');
  console.error(err);
  console.log('-----');
  if (err.httpCode) {
    const filteredError = Object.assign({}, err);
    const httpCode = err.httpCode;
    delete filteredError.httpCode;
    res.status(httpCode).send(filteredError);
  } else if (req.app.get('isProduction')) {
    // parse the body for json
    req.app.get('bugsnag').notify(err, {
      originalUrl: req.originalUrl,
    });
    res.status(500).send({
      error: 'Whoops something went wrong! We\'ve been alerted and will be sure to take a look',
    });
  } else {
    res.status(500).send({
      error: err.message,
      stack: err.stack,
    });
  }
};
