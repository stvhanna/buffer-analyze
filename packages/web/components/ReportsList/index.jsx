import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import ReportsList from '@bufferapp/report-list';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
`;

const Container = styled.div`
  flex-grow: 1;
  height: 100vh;
  max-width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #FAFAFA;
  overflow-y: auto;
`;

const Content = styled.div`
  max-width: 65rem;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 2.8rem 0;
  box-sizing: border-box;
`;

const ReportsPage = ({ location }) => (
  <Page>
    <NavSidebar route={location.pathname} />
    <Container>
      <Content>
        <ReportsList />
      </Content>
    </Container>
  </Page>
);

ReportsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect()(ReportsPage);
