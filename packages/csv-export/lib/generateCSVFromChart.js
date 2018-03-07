import moment from 'moment';

const createChartFilename = (chart, date) => {
  const { startDate, endDate } = date;
  const fileDateFormat = 'YYYYMMDD';
  const startDateFormatted = moment(startDate, 'MM/DD/YYYY').format(fileDateFormat);
  const endDateFormatted = moment(endDate, 'MM/DD/YYYY').format(fileDateFormat);

  return `${chart.filename}-${startDateFormatted}-to-${endDateFormatted}.csv`;
};

const getCSVHeader = chart =>
  Object.keys(chart).reduce((header, key) => `${header},${key}`);

const getCSVLine = (chart, index) => {
  const keys = Object.keys(chart);
  return keys.reduce((line, key, idx) => {
    const value = chart[key][index] !== undefined ? chart[key][index] : '';
    if (idx === 1) {
      return `${chart[line][index]},${value}`;
    }
    return `${line},${value}`;
  });
};

const getCSVBody = (chart) => {
  const keys = Object.keys(chart);
  let body;
  if (chart[keys[0]].length) {
    body = chart[keys[0]]
      .map((_, index) => getCSVLine(chart, index))
      .join('\n');
  } else {
    body = keys.reduce((line, key, index) => {
      if (index === 1) {
        return `${chart[line]},${chart[key]}`;
      }
      return `${line},${chart[key]}`;
    });
  }
  return body;
};

const convertChartToCSV = chart => `${getCSVHeader(chart)}\n${getCSVBody(chart)}`;

const generateCSV = (chart, date) => {
  const metricKeys = Object.keys(chart.data);
  const hasMetrics = metricKeys.length > 0;
  if (!hasMetrics) {
    return {
      filename: null,
      csv: null,
    };
  }

  return {
    filename: createChartFilename(chart, date),
    csv: convertChartToCSV(chart.data),
  };
};

export default (charts, date) =>
  Promise
    .all(charts.map(chart => generateCSV(chart, date)))
    .then(csvs => csvs.filter(csv => csv !== null));
