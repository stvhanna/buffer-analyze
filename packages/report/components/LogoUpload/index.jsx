import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import {
  Text,
  Button,
  CloseIcon,
} from '@bufferapp/components';

import styled from 'styled-components';

const DropzoneWrapper = styled.div`
  float: right;
  height: 64px;
  width: 160px;
  position: relative;
  display: flex;
  &:hover > button > span {
    opacity: 1;
  }
`;

const DropzonContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: #D5E3EF;
  background: #FFFFFF;
`;

const LogoPlaceholder = styled.div`
  height: 64px;
  width: 160px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  text-align: right;

  &:hover {
    border-width: 1px;
    border-style: dotted;
    border-radius: 3px;
    border-color: #D5E3EF;
    opacity: 0.6;
  }
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const DropZone = {
  height: '64px',
  width: '160px',
};

const UploadLogoText = styled.span`
  display: block;
  margin-top: 13px;
`;

const UploadingText = styled.span`
  display: block;
  margin-top: 21px;
`;

const Box = styled.span`
  position: absolute;
  top: -12px;
  right: -12px;
  background: #FFFFFF;
  border: 1px solid #D5E3EF;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 1.75rem;
  height: 1.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin: 0 0 0 .25rem;
  z-index: 9999;
  border-radius: 50%;
  display: flex;
  opacity: 0;
  transition: opacity 50ms linear;
`;

class LogoUpload extends Component {
  render() {
    const { logoUrl, uploadLogo, deleteLogo, isLogoUploading,
      isLogoDropzoneDisabled, exporting } = this.props;
    // Do not display the logo box in export when logo is not set
    if (logoUrl === '' && exporting) return null;
    return (
      <DropzoneWrapper>
        {!logoUrl &&
          <DropzonContainer>
            <UploadLogoText>
              {!isLogoUploading && <Text weight="medium" color="outerSpace">Upload logo</Text>}
            </UploadLogoText>
            {!isLogoUploading && <Text size="extra-small" color="shuttleGray">PNG or JPG</Text>}
            {isLogoUploading && <UploadingText>
              <Text weight="bold">Uploading...</Text>
            </UploadingText>}
          </DropzonContainer>
        }
        <Dropzone
          name="file"
          disablePreview
          disableClick={isLogoDropzoneDisabled}
          onDropAccepted={uploadLogo}
          multiple={false}
          accept="image/png,image/jpeg"
          style={DropZone}
        >
          <LogoPlaceholder>
            <LogoImage src={logoUrl} />
          </LogoPlaceholder>
        </Dropzone>
        {logoUrl &&
          <Button noStyle onClick={() => deleteLogo()}>
            <Box>
              <CloseIcon />
            </Box>
          </Button>
        }
      </DropzoneWrapper>
    );
  }
}

LogoUpload.defaultProps = {
  isLogoUploading: false,
  isLogoDropzoneDisabled: false,
  exporting: false,
};

LogoUpload.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  uploadLogo: PropTypes.func.isRequired,
  deleteLogo: PropTypes.func.isRequired,
  isLogoUploading: PropTypes.bool,
  isLogoDropzoneDisabled: PropTypes.bool,
  exporting: PropTypes.bool,
};

export default LogoUpload;
