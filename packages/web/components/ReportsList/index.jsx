import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import ReportsList from '@bufferapp/report-list';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flexGrow: 1;
  height: 100%;
  background: #FAFAFA;
`;

const Container = styled.div`
  padding: 2.8rem;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

const Content = styled.div`
  max-width: 65rem;
  width: 100%;
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
