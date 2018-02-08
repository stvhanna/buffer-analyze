import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Text, Divider, Link } from '@bufferapp/components';
import NavSidebar from '@bufferapp/nav-sidebar';
import { ChartCard } from '@bufferapp/analyze-shared-components';

const pageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
  background: '#FAFAFA',
};

const defaultPageStyle = {
  width: '52rem',
  margin: '0 auto',
  padding: '2.5rem 1rem 4rem',
};

const cardContentStyle = {
  padding: '1.5rem',
  lineHeight: '1.5rem',
};

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
      Get started by viewing an <Link href="/overview" unstyled onClick={e => navigate(e, dispatch, '/overview')}>overview of your performance</Link> or gaining some insights around <Link href="/posts" unstyled onClick={e => navigate(e, dispatch, '/posts')}>your posts</Link>. You can also view {reportsLink}.
    </span>
  );

  return (
    <div style={pageStyle}>
      <NavSidebar route={location.pathname} />
      <div style={defaultPageStyle}>
        <ChartCard>
          <div style={cardContentStyle}>
            <Text size="large">Welcome to Buffer Analyze 🎉</Text>
            <Divider marginBottom="1.5rem" />
            <Text>
              {welcomeText}
            </Text>
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

DefaultPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(DefaultPage);
