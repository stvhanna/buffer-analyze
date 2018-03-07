import html2canvas from 'html2canvas';
import dataURLToBlob from 'dataurl-to-blob';
import moment from 'moment';

const convertCanvasToPNG = (canvas) => {
  const dataURL = canvas.toDataURL('image/png');
  return dataURLToBlob(dataURL);
};

const createChartFilename = (chart, date) => {
  const { startDate, endDate } = date;
  const fileDateFormat = 'YYYYMMDD';
  const startDateFormatted = moment(startDate, 'MM/DD/YYYY').format(fileDateFormat);
  const endDateFormatted = moment(endDate, 'MM/DD/YYYY').format(fileDateFormat);

  return `${chart.filename}-${startDateFormatted}-to-${endDateFormatted}.png`;
};
const generatePNG = (chart, date) => {
  const node = document.getElementById(chart.id);
  if (!node) return null;
  return html2canvas(node, {
    background: '#fff',
    useCORS: true,
    dpi: 300,
  }).then(canvas => ({
    image: convertCanvasToPNG(canvas),
    filename: createChartFilename(chart, date),
  }));
};

export default (charts, date) =>
  Promise
    .all(charts.map(chart => generatePNG(chart, date)))
    .then(pngs => pngs.filter(png => png !== null));
