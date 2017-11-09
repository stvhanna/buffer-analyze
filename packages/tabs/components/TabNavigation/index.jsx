import React from 'react';
import PropTypes from 'prop-types';
import {
  Tabs,
  Tab,
} from '@bufferapp/components';

const TabNavigation = ({ selectedTabId, onTabClick }) => (
  /* wrapper div with "tabs" id necessary as a selector
  for a11y focus after selecting profile in sidebar */
  <div id="tabs">
    <Tabs
      selectedTabId={selectedTabId}
      onTabClick={onTabClick}
    >
      <Tab tabId={'overview'}>Overview</Tab>
      <Tab tabId={'posts'}>Posts</Tab>
    </Tabs>
  </div>
);


TabNavigation.propTypes = {
  selectedTabId: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabNavigation;
