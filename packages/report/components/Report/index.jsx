import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Button,
} from '@bufferapp/components';
import styled from 'styled-components';
import ChartFactory from '../ChartFactory';
import DateRange from '../DateRange';
import EditTitle from '../EditTitle';

const Title = styled.h1`
  color: #343E47;
  font-size: 26px;
  font-weight: bold;
  margin: 0 0 .5rem;
`;

class Report extends React.Component {
  static defaultProps = {
    loading: false,
    exporting: false,
    edit: false,
    dateRange: {},
    charts: [],
  };

  static propTypes = {
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
    editName: PropTypes.func.isRequired,
    moveUp: PropTypes.func.isRequired,
    moveDown: PropTypes.func.isRequired,
    deleteChart: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (this.shouldAddPageBreaks(prevProps)) {
      this.props.parsePageBreaks();
    }
  }

  shouldAddPageBreaks(prevProps) {
    const hasStoppedLoading = prevProps.loading && !this.props.loading;
    const isExportView = this.props.exporting;

    return hasStoppedLoading && isExportView;
  }

  render() {
    const { name, dateRange, charts, loading,
      edit, saveChanges, editName, moveUp, moveDown, deleteChart, exporting } = this.props;
    if (loading) return '...loading';
    return (
      <div id="report-page">
        <Text>
          { edit && <EditTitle name={name} saveChanges={saveChanges} />}
          { !edit && <div><Button noStyle onClick={editName}><Title>{name}</Title></Button></div> }
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

export default Report;
