import React from 'react';
import PropTypes from 'prop-types';

import {
  Divider,
} from '@bufferapp/components';

import {
  white,
  mystic,
} from '@bufferapp/components/style/color';

import Label from './Label';
import Item from './Item';
import Insights from './Insights';
import FeedbackLink from './FeedbackLink';
import TrialStatus from './TrialStatus';

const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '0.75rem 0',
  minHeight: '100vh',
  maxHeight: '100vh',
  width: '200px',
  background: white,
  borderRight: `1px solid ${mystic}`,
  boxSizing: 'border-box',
};

const bottomSectionStyle = {
  marginTop: 'auto',
};

const NavSidebar = props => (
  <div style={sidebarStyle}>
    <Item href="/" {...props}>Dashboard</Item>
    <Divider marginTop="0.75rem" marginBottom="1rem" />
    <Insights {...props} />
    <div>
      <Label>Tools</Label>
      <Item href="/comparisons/" {...props}>Comparisons</Item>
      <Item href="/reports/" {...props}>Reports</Item>
    </div>
    <div style={bottomSectionStyle}>
      <TrialStatus {...props} />
      <FeedbackLink email="hello+analyze@buffer.com">Send Feedback</FeedbackLink>
    </div>
  </div>
);

export default NavSidebar;
