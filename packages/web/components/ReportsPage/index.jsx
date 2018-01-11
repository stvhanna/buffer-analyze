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
  padding: 0.85rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #E2E8ED;
  box-sizing: border-box;
`;

const Card = styled.section`
  width: 880px;
  background: #FFFFFF;
  border: 1px solid #E2E8ED;
  box-shadow: 0px 0px 10px rgba(48, 71, 89, 0.05);
  border-radius: 5px;
  padding: 4.5rem 4rem;
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
        <Button onClick={() => dispatch(push('/reports'))}><Text weight="bold" size="small">Back to Reports</Text></Button>
        <Section>
          <DatePicker staticData />
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
