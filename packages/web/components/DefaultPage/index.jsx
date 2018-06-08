import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavSidebar from '@bufferapp/nav-sidebar';
import {
  Text,
  Link,
} from '@bufferapp/components';
import {
  ChartCard,
  ChartHeader,
  ChartTitle,
} from '@bufferapp/analyze-shared-components';

const Page = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  background: #FAFAFA;
`;

const Container = styled.div`
  width: 52rem;
  margin: 0 auto;
  padding: 1.5rem 1rem 4rem;
`;

const ChartContainer = styled.div`
  position: relative;
  padding: 1.5rem;
  line-height: 1.5rem;
`;

const navigate = (event, dispatch, url) => {
  event.preventDefault();
  dispatch(push(url));
};

const DefaultPage = ({ location, dispatch }) => {
  const reportsLink = (<Link
    href="/reports"
    unstyled
    onClick={e => navigate(e, dispatch, '/reports')}
  >your reports</Link>);

  const welcomeText = (
    <span>
      Get started by viewing an <Link href="/overview" unstyled onClick={e => navigate(e, dispatch, '/overview')}>overview of your performance</Link> or gaining some insights around <Link href="/posts" unstyled onClick={e => navigate(e, dispatch, '/posts')}>your posts</Link>. You can also <Link href="/comparisons" unstyled onClick={e => navigate(e, dispatch, '/comparisons')}>compare performance across networks</Link> or view {reportsLink}.
    </span>
  );

  return (
    <Page>
      <NavSidebar route={location.pathname} />
      <Container>
        <ChartCard>
          <ChartHeader>
            <ChartTitle>
              Welcome to Buffer Analyze
            </ChartTitle>
          </ChartHeader>
          <ChartContainer>
            <Text>{welcomeText}</Text>
          </ChartContainer>
        </ChartCard>
      </Container>
    </Page>
  );
};

DefaultPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(DefaultPage);
