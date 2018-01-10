import React from 'react';
import PropTypes from 'prop-types';

import { Text, Divider, Link } from '@bufferapp/components';
import NavSidebar from '@bufferapp/nav-sidebar';
import {
  ChartCard
} from '@bufferapp/analyze-shared-components';

const pageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
  background: '#FAFAFA'
};

const defaultPageStyle = {
  width: '52rem',
  margin: '0 auto',
  padding: '2.5rem 1rem 4rem',
};

const cardContentStyle = {
  padding: '1.5rem',
  lineHeight: '1.5rem'
};

const cardLinkStyle = {
  textDecoration: 'none',
  color: 'rgb(22, 142, 234)'
};

const DefaultPage = ({ location }) =>
  <div style={pageStyle}>
    <NavSidebar route={location.pathname} />
    <div style={defaultPageStyle}>
      <ChartCard>
        <div style={cardContentStyle}>
          <Text size="large">Welcome to Buffer Analyze 🎉</Text>
          <Divider marginBottom="1.5rem"/>
          <Text>
            Get started by viewing Insights for <a href='#' style={cardLinkStyle}>Facebook Pages</a>, <a href='#' style={cardLinkStyle}>Twitter</a> or <a href='#' style={cardLinkStyle}>Instagram Profiles</a>.
            You can also <a href='#' style={cardLinkStyle}>compare profiles</a> or view <a href='#' style={cardLinkStyle}>your reports</a>.
          </Text>
        </div>
      </ChartCard>
    </div>
  </div>;

DefaultPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultPage;
