import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import ProfileSelector from '@bufferapp/analyze-profile-selector';
import ProfileHeader from '@bufferapp/profile-header';
import DatePicker from '@bufferapp/analyze-date-picker';
import ProfileLoader from '@bufferapp/profile-loader';
import TabNavigation from '@bufferapp/analyze-tabs';
import PNGExportButton from '@bufferapp/analyze-png-export';
import CSVExportButton from '@bufferapp/analyze-csv-export';
import PostsTab from '../PostsTab';
import OverviewTab from '../OverviewTab';

const pageStyle = {
  display: 'flex',
};

const contentStyle = {
  flexGrow: 1,
  flexDirection: 'row',
  height: '100vh',
  maxWidth: '100%',
};

const toolbarContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  background: '#FFFFFF',
  padding: '0.75rem 0.5rem',
  marginbottom: '1rem',
  borderBottom: '1px solid #E2E8ED',
  boxSizing: 'border-box',
};

const insightContainer = {
  background: '#FAFAFA',
  overflowY: 'auto',
  height: 'calc(100vh - 68px)', // TODO: Don't want this hardcoded
};

const insightMaxWidth = {
  width: '52rem',
  margin: '0 auto',
  padding: '2.5rem',
};

const toolbarTabNavigation = {
};

const toolbarRight = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const toolbarProfileSelector = {
};

const toolbarDatePicker = {
  marginLeft: '0.5rem',
};

const toolbarExport = {
  marginLeft: '0.5rem',
};

const InsightsPage = ({
  match: {
    params: {
      service,
      id,
      tabId,
    },
  },
  location,
}) => (
  <div style={pageStyle}>
    <NavSidebar route={location.pathname} tabId={tabId} />
    <ProfileLoader>
      <div style={contentStyle}>
        <div style={toolbarContainer}>
          <div style={toolbarTabNavigation}>
            <TabNavigation
              profileId={id}
              service={service}
              tabId={tabId}
            />
          </div>
          <div style={toolbarRight}>
            <div style={toolbarProfileSelector}>
              <ProfileSelector profileService={service} />
            </div>
            <div style={toolbarDatePicker}>
              <DatePicker />
            </div>
            <div style={toolbarExport}>
              <PNGExportButton filename={`buffer-${tabId === 'overview' ? 'overview' : 'posts'}-analytics`} />
              <CSVExportButton filename={`buffer-${tabId === 'overview' ? 'overview' : 'posts'}-analytics`} />
            </div>
          </div>
        </div>
        <div style={insightContainer}>
          <div style={insightMaxWidth}>
            <ProfileHeader selectedProfileId={id} />
            <Switch>
              <Route
                path="/insights/:service/:id/overview"
                component={OverviewTab}
              />
              <Route
                path="/insights/:service/:id/posts"
                component={PostsTab}
              />
            </Switch>
          </div>
        </div>
      </div>
    </ProfileLoader>
  </div>
);

InsightsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      service: PropTypes.string,
      id: PropTypes.string,
      tabId: PropTypes.string,
    }),
  }).isRequired,
};

export default connect()(InsightsPage);
