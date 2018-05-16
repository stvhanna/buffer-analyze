import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import {
  Text,
  Button,
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

const Title = styled.h1`
  display: inline-block;
  color: #000000;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 .5rem 0;
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

  render() {
    const { name, dateRange, charts, loading,
      edit, saveChanges, editName, moveUp, moveDown, deleteChart, exporting, uploadLogo,
        logoUrl, deleteLogo, isLogoUploading } = this.props;
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
                      {!isLogoUploading && <Text weight="bold">Upload logo</Text>}
                    </UploadLogoText>
                    {!isLogoUploading && <Text size="small" color="shuttleGray">PNG or JPG</Text>}
                    {isLogoUploading && <UploadingText>
                      <Text weight="bold">Uploading...</Text>
                    </UploadingText>}
                  </DropzonContainer>
                }
                <Dropzone
                  name="file"
                  disablePreview
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
  isLogoUploading: false,
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
  logoUrl: PropTypes.string.isRequired,
  editName: PropTypes.func.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  deleteChart: PropTypes.func.isRequired,
  parsePageBreaks: PropTypes.func.isRequired,
  uploadLogo: PropTypes.func.isRequired,
  deleteLogo: PropTypes.func.isRequired,
  isLogoUploading: PropTypes.bool,
};

export default Report;
