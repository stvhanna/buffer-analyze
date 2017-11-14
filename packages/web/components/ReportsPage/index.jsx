import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from '@bufferapp/analyze-date-picker';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import Report from '@bufferapp/report';
import { Button } from '@bufferapp/analyze-shared-components';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flexGrow: 1;
  height: 100%;
  background: #FAFAFA;
`;

const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

const Content = styled.div`
  max-width: 65rem;
  width: 100%;
  margin: 2.8rem auto;
`;

const Header = styled.header`
  background: white;
  padding: .5rem;
  box-shadow: 0px 1px 0px #E2E8ED;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReportsPage = ({ location, dispatch }) => (
  <Page>
    <NavSidebar route={location.pathname} />
    <Container>
      <Header>
        <Button onClick={() => dispatch(push('/reports'))}>Back to Reports</Button>
        <DatePicker staticData />
      </Header>
      <Content>
        <Report />
      </Content>
    </Container>
  </Page>
);

ReportsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ReportsPage);
