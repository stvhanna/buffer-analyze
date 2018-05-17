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

const Title = styled.h1`
  display: inline-block;
  color: #000000;
  font-size: 2rem;
  font-weight: 500;
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
              <LogoUpload
                logoUrl={logoUrl}
                uploadLogo={uploadLogo}
                deleteLogo={deleteLogo}
                isLogoUploading={isLogoUploading}
              />
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
