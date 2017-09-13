import JSZip from 'jszip';
import FileSaver from 'file-saver';

export default (filename, files) => {
  const zip = new JSZip();
  const zipFolder = zip.folder(`${filename}-images`);
  files.forEach(file => zipFolder.file(file.filename, file.image));
  return zip.generateAsync({
    type: 'blob',
  }).then(content => FileSaver.saveAs(content, `${filename}.zip`));
};
