import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Text,
} from '@bufferapp/components';

import {
  ChartStateLoading as Loading,
} from '@bufferapp/analyze-shared-components';

import {
  offWhite,
  white,
} from '@bufferapp/components/style/color';

import ChartFactory from '../ChartFactory';
import Cover from './Cover';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  background: ${offWhite};
  min-height: 100%;
`;

const Page = styled.article`
  position: relative;
  overflow-y: hidden;
  height: 1447.74px; /* this seems to be the exact A4 portrait size */
  margin: 0;
  padding: 0;

  @media print {
    box-sizing: border-box;
    border: initial;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
  }
`;

function groupChartsForPages(charts) {
  const grouped = [];
  let set = [];
  for (let index = 0; index < charts.length; index += 1) {
    if (index !== 0 && index % 2 !== 0) { // is not 0 or odd
      set.push(charts[index]);
      grouped.push(set);
      set = [];
    } else {
      set.push(charts[index]);
      if (index === charts.length - 1) grouped.push(set);
    }
  }
  return grouped;
}

class ReportExport extends React.Component {
  render() {
    const {
      charts,
      dateRange,
      deleteChart,
      exporting,
      loading,
      logoUrl,
      moveUp,
      moveDown,
      name,
    } = this.props;

    const chartGroups = groupChartsForPages(charts);

    if (loading) {
      return (
        <Loading active noBorder large />
      );
    }

    return (
      <Wrapper id="report-page">
        <Page>
          <Cover
            dateRange={dateRange}
            logoUrl={logoUrl}
            name={name}
          />
        </Page>
        {chartGroups.map(chartSet => (
          <Page>
            <Header
              dateRange={dateRange}
              logoUrl={logoUrl}
              name={name}
            />
            <ChartFactory
              charts={chartSet}
              moveUp={moveUp}
              moveDown={moveDown}
              deleteChart={deleteChart}
              exporting={exporting}
            />
            <Footer />
          </Page>
        ))}
      </Wrapper>
    );
  }
}

ReportExport.defaultProps = {
  loading: false,
  exporting: false,
  edit: false,
  dateRange: {},
  charts: [],
  logoUrl: false,
  name: '',
};

ReportExport.propTypes = {
  loading: PropTypes.bool,
  exporting: PropTypes.bool,
  dateRange: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  name: PropTypes.string,
  charts: PropTypes.arrayOf(PropTypes.shape({
    chart_id: PropTypes.string,
  }).isRequired),
  logoUrl: PropTypes.string.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  deleteChart: PropTypes.func.isRequired,
};

export default ReportExport;
