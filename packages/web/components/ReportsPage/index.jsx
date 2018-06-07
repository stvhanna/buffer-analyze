import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from '@bufferapp/analyze-date-picker';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import PDFExportButton from '@bufferapp/pdf-export';
import Report from '@bufferapp/report';
import { Button } from '@bufferapp/analyze-shared-components';
import Text from '@bufferapp/components/Text';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  height: 100%;
`;

const Container = styled.div`
  flex-grow: 1;
  height: 100vh;
  max-width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #FAFAFA;
`;

const Content = styled.div`
  display: 'flex',
  flex: 1,
  margin: 0 auto;
  padding: 2.5rem 1rem 4rem;
  overflow-y: auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  padding: 0.85rem 0.5rem;
  border-bottom: 1px solid #E2E8ED;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const Card = styled.section`
  width: 920px;
  margin: 0 auto;
  box-shadow: 0px 0px 40px rgba(48, 71, 89, 0.125);
  border-radius: 5px;
  overflow: hidden;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
`;

const ReportsPage = ({ location, dispatch }) => (
  <Page>
    <NavSidebar route={location.pathname} />
    <Container>
      <Header>
        <Button onClick={() => dispatch(push('/reports'))}><Text weight="bold" size="extra-small">Back to Reports</Text></Button>
        <Section>
          <DatePicker />
          <PDFExportButton />
        </Section>
      </Header>
      <Content>
        <Card>
          <Report />
        </Card>
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
