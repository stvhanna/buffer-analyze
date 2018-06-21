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

const Graph = styled.section`
  box-sizing: border-box;
  padding: 4.5rem 3rem;
  margin: 1rem;
  height: 800px;
  background: ${white};
  border: 1px solid #DBE8F1;
`;

class ReportExport extends React.Component {
  renderGraph() {
    return (
      <Graph>
        <Text>Graph</Text>
      </Graph>
    );
  }

  render() {
    const {
      dateRange,
      loading,
      logoUrl,
      name,
    } = this.props;

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
        <Page>
          <Header
            dateRange={dateRange}
            logoUrl={logoUrl}
            name={name}
          />
          {this.renderGraph()}
          {this.renderGraph()}
          <Footer />
        </Page>
        <Page>
          <Header
            dateRange={dateRange}
            logoUrl={logoUrl}
            name={name}
          />
          {this.renderGraph()}
          {this.renderGraph()}
          <Footer />
        </Page>
        <Page>
          <Header
            dateRange={dateRange}
            logoUrl={logoUrl}
            name={name}
          />
          {this.renderGraph()}
          <Footer />
        </Page>
      </Wrapper>
    );
  }
}

ReportExport.defaultProps = {
  charts: [],
  dateRange: {},
  loading: false,
  logoUrl: null,
  name: '',
};

ReportExport.propTypes = {
  charts: PropTypes.arrayOf(PropTypes.shape({
    chart_id: PropTypes.string,
  }).isRequired),
  dateRange: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  loading: PropTypes.bool,
  logoUrl: PropTypes.string,
  name: PropTypes.string,
};

export default ReportExport;
