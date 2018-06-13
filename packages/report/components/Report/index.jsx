import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Button,
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
import LogoUpload from '../LogoUpload';

const Page = styled.div`
  background: #FCFCFC;
`;

const Header = styled.div`
  padding: 4.5rem 4rem;
  background: #FFFFFF;
  border-bottom: 1px solid #DBE8F1;
`;

const Title = styled.h1`
  display: inline-block;
  color: #000000;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 .5rem 0;
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

const Centered = styled.div`
  display: flex;
  height: 400px;
  background: #FFFFFF;
  justify-content: center;
  align-items: center;
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
        logoUrl, deleteLogo, isLogoUploading, isLogoDropzoneDisabled } = this.props;
    if (loading) {
      return (
        <Centered>
          <Loading active noBorder transparent />
        </Centered>
      );
    }
    return (
      <Page id="report-page">
        <Header>
          <Text>
            { edit && <EditTitle name={name} saveChanges={saveChanges} />}
            { !edit &&
              <Container>
                <LogoUpload
                  logoUrl={logoUrl}
                  uploadLogo={uploadLogo}
                  deleteLogo={deleteLogo}
                  isLogoUploading={isLogoUploading}
                  isLogoDropzoneDisabled={isLogoDropzoneDisabled}
                  exporting={exporting}
                />
                <Button noStyle onClick={editName}>
                  <Title>{name}</Title>
                </Button>
                <Icon><EditIcon /></Icon>
              </Container>
            }
            <DateRange {...dateRange} />
          </Text>
        </Header>
        <ChartFactory
          charts={charts}
          moveUp={moveUp}
          moveDown={moveDown}
          deleteChart={deleteChart}
          exporting={exporting}
        />
      </Page>
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
  isLogoDropzoneDisabled: false,
  name: '',
};

Report.propTypes = {
  loading: PropTypes.bool,
  exporting: PropTypes.bool,
  edit: PropTypes.bool,
  dateRange: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  name: PropTypes.string,
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
  isLogoDropzoneDisabled: PropTypes.bool,
};

export default Report;
