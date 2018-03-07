import JSZip from 'jszip';
import FileSaver from 'file-saver';

export default (filename, files) => {
  const zip = new JSZip();
  const zipFolder = zip.folder(`${filename}-csv`);
  files
    .filter(file => file.csv !== null)
    .forEach(file => zipFolder.file(file.filename, file.csv));
  return zip.generateAsync({
    type: 'blob',
  }).then(content => FileSaver.saveAs(content, `${filename}.zip`));
};
