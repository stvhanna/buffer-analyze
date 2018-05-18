import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';

import LogoUpload from './index';

storiesOf('LogoUpload')
  .addDecorator(checkA11y)
  .add('renders no logo image upload box', () => (
    <div style={{ width: '260px', height: '100%', display: 'flex', padding: '50px' }}>
      <LogoUpload
        uploadLogo={action('uploadLogo')}
        deleteLogo={action('deleteLogo')}
      />
    </div>
  ))
  .add('renders logo in the box with the delete icon on the top right side (on hover)', () => (
    <div style={{ width: '260px', height: '100%', display: 'flex', padding: '50px' }}>
      <LogoUpload
        logoUrl={'https://buffer-analyze.s3.amazonaws.com/report-logos/img_5afc8d8f209ec.jpg'}
        uploadLogo={action('uploadLogo')}
        deleteLogo={action('deleteLogo')}
      />
    </div>
  ))
  .add('renders logo and disables the replacement of the logo', () => (
    <div style={{ width: '260px', height: '100%', display: 'flex', padding: '50px' }}>
      <LogoUpload
        logoUrl={'https://buffer-analyze.s3.amazonaws.com/report-logos/img_5afc8d8f209ec.jpg'}
        isLogoDropzoneDisabled
        uploadLogo={action('uploadLogo')}
        deleteLogo={action('deleteLogo')}
      />
    </div>
  ))
  .add('renders uploading state', () => (
    <div style={{ width: '260px', height: '100%', display: 'flex', padding: '50px' }}>
      <LogoUpload
        isLogoUploading
        uploadLogo={action('uploadLogo')}
        deleteLogo={action('deleteLogo')}
      />
    </div>
  ))
  ;
