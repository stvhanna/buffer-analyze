import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import {
  Text,
  Button,
  CircleXIcon,
  CloseIcon,
} from '@bufferapp/components';
import {
  ChartStateLoading as Loading,
} from '@bufferapp/analyze-shared-components';
import {
  EditIcon,
} from '@bufferapp/components/Icon/Icons';
import styled from 'styled-components';
import ChartFactory from '../ChartFactory';
import DateRange from '../DateRange';
import EditTitle from '../EditTitle';

const Title = styled.h1`
  display: inline-block;
  color: #000000;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 .5rem 0;
`;

const LogoPlaceholder = styled.div`
  height: 64px;
  width: 160px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  text-align: right;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: #D5E3EF;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const DropzoneWrapper = styled.div`
  float: right;
  height: 64px;
  width: 160px;
  position: relative;

  &:hover > button > span {
    opacity: 1;
  }
`;

const DropzonContainer = styled.div`
  padding: 10px;
  height: auto;
  position: absolute;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const DropZone = {
  height: '64px',
  width: '160px',
};

const UploadLogoText = styled.span`
  display: block;
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

const Container = styled.div`
  &:hover > div {
    opacity: 1;
  }
`;

const Icon = styled.div`
  display: inline-block;
  margin: 0 0 0 0.75em;
  opacity: 0;
  transition: opacity 50ms linear;
`;

class Report extends React.Component {
  componentDidUpdate() {
    if (this.shouldAddPageBreaks()) {
      this.props.parsePageBreaks();
    }
  }

  shouldAddPageBreaks() {
    const hasStoppedLoading = !this.props.loading;
    const isExportView = this.props.exporting;

    return hasStoppedLoading && isExportView;
  }

  // onImageDrop(files) {
  //   console.log(files[0]);
  //   console.log('onImageDrop');
  // }

  onDropRejected(files) {
    // 5000000
    const uploadingImage = files[0];
    if (uploadingImage.size > 50) {
      console.log(this.props);
      this.props.hasUploadLogoError = 'Image file size is too large';
    }
  }

  // onDropRejected() {
  //   const hasError = this.props.hasUploadLogoError = true;
  // }

  render() {
    const { name, dateRange, charts, loading,
      edit, saveChanges, editName, moveUp, moveDown, deleteChart, exporting, uploadLogo,
        logoUrl, deleteLogo, hasUploadLogoError } = this.props;
    if (loading) return <Loading active noBorder />;
    return (
      <div id="report-page">
        <Text>
          { edit && <EditTitle name={name} saveChanges={saveChanges} />}
          { !edit &&
            <Container>
              <DropzoneWrapper>
                {!logoUrl &&
                  <DropzonContainer>
                    <UploadLogoText>
                      <Text weight="bold">Upload logo</Text>
                    </UploadLogoText>
                    {!hasUploadLogoError && <Text size="small" color="shuttleGray">PNG or JPG &middot; 5mb max</Text>}
                    {hasUploadLogoError && <Text size="small" color="torchRed">Image file size is too large</Text>}
                  </DropzonContainer>
                }
                <Dropzone
                  name="file"
                  maxSize={5000000}
                  disablePreview
                  onDropAccepted={uploadLogo}
                  multiple={false}
                  accept="image/png,image/jpeg"
                  style={DropZone}
                  // onDropRejected={this.onDropRejected.bind(this)}
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

              <Button noStyle onClick={editName}>
                <Title>{name}</Title>
              </Button>
              <Icon><EditIcon /></Icon>
            </Container>
          }
          <DateRange {...dateRange} />
        </Text>
        <ChartFactory
          charts={charts}
          moveUp={moveUp}
          moveDown={moveDown}
          deleteChart={deleteChart}
          exporting={exporting}
        />
      </div>
    );
  }
}

Report.defaultProps = {
  loading: false,
  exporting: false,
  edit: false,
  dateRange: {},
  charts: [],
  hasUploadLogoError: false,
};

Report.propTypes = {
  loading: PropTypes.bool,
  exporting: PropTypes.bool,
  edit: PropTypes.bool,
  dateRange: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  saveChanges: PropTypes.func.isRequired,
  charts: PropTypes.arrayOf(PropTypes.shape({
    chart_id: PropTypes.string,
  }).isRequired),
  logoUrl: PropTypes.string,
  editName: PropTypes.func.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  deleteChart: PropTypes.func.isRequired,
  parsePageBreaks: PropTypes.func.isRequired,
  uploadLogo: PropTypes.func.isRequired,
  deleteLogo: PropTypes.func.isRequired,
  hasUploadLogoError: PropTypes.bool,
};

export default Report;
