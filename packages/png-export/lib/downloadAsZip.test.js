/* eslint-disable import/first */
import downloadAsZip from './downloadAsZip';

jest.mock('jszip');
jest.mock('file-saver');
import JSZip from 'jszip';
import FileSaver from 'file-saver';

describe('downloadAsZip', () => {
  const zipFile = 'zipfile contents';
  const zip = {
    generateAsync: jest.fn(() => Promise.resolve(zipFile)),
    folder: jest.fn(),
  };
  JSZip.mockImplementation(() => zip);

  it('downloads a zip file with provided filename', () => {
    FileSaver.saveAs.mockReturnValue(Promise.resolve());
    downloadAsZip('analytics', []).then(() => {
      expect(zip.generateAsync).toHaveBeenCalledWith({
        type: 'blob',
      });
      expect(FileSaver.saveAs).toHaveBeenCalledWith(zipFile, 'analytics.zip');
    });
  });

  it('creates a folder named <filename>-images', () => {
    downloadAsZip('analytics', []).then(() => {
      expect(zip.folder).toHaveBeenCalledWith('analytics-images');
    });
  });

  it('adds all the images on the folder created', () => {
    const zipFolder = {
      file: jest.fn(),
    };
    zip.folder.mockReturnValue(zipFolder);
    const files = [{
      filename: 'summary-20160606-to20160610.png',
      image: 'image content',
    }, {
      filename: 'average-20160606-to20160610.png',
      image: 'image content',
    }, {
      filename: 'top-posts-20160606-to20160610.png',
      image: 'image content',
    }];
    downloadAsZip('analytics', files).then(() => {
      expect(zipFolder.file).toHaveBeenCalledWith(files[0].filename, files[0].image);
    });
  });
});

