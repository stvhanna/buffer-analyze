import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

import { offWhite } from '@bufferapp/components/style/color';

const Page = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 100%;
  background: ${offWhite};
`;

const Container = styled.div`
  width: 920px;
  margin: 0 auto;
  padding: 1.5rem 1rem 4rem;
`;

const ChartContainer = styled.div`
  position: relative;
  padding: 0.5rem 1.5rem 1.75rem;
  line-height: 1.5rem;
`;

const Widget = styled.div`
  display: flex;
  align-items: center;
  min-height: 32px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  #HW_badge {
    background: #4080F7;
  }
`;

const navigate = (event, dispatch, url) => {
  event.preventDefault();
  dispatch(push(url));
};

const headwayConfig = {
  selector: '#headway',
  trigger: '#headway',
  account: 'xYno57',
};

class DefaultPage extends Component {
  componentDidMount() {
    if (typeof Headway !== 'undefined') Headway.init(headwayConfig); // eslint-disable-line
  }

  render() {
    const {
      location,
      dispatch,
    } = this.props;

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
              <Text>
                <Widget id="headway">
                  What&apos;s New
                </Widget>
              </Text>
            </ChartHeader>
            <ChartContainer>
              <Text>{welcomeText}</Text>
            </ChartContainer>
          </ChartCard>
        </Container>
      </Page>
    );
  }
};

DefaultPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(DefaultPage);
