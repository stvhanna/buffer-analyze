import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import ProfileSelector from '@bufferapp/analyze-profile-selector';
import ProfileHeader from '@bufferapp/profile-header';
import DatePicker from '@bufferapp/analyze-date-picker';
import ProfileLoader from '@bufferapp/profile-loader';
import Divider from '@bufferapp/components/Divider';
import TabNavigation from '@bufferapp/tabs';
import PNGExportButton from '@bufferapp/analyze-png-export';
import CSVExportButton from '@bufferapp/analyze-csv-export';
import { offWhite, mystic } from '@bufferapp/components/style/color';
import PostsTab from '../PostsTab';
import OverviewTab from '../OverviewTab';

const contentStyle = {
  overflowY: 'auto',
  flexGrow: 1,
};

const pageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
};

const datePickerContainer = {
  padding: '2rem 0',
  display: 'flex',
  justifyContent: 'space-between',
};

const profileSelectorContainer = {
  background: offWhite,
  border: `1px solid ${mystic}`,
  padding: '1rem',
  marginTop: '10px',
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
      <TabNavigation
        profileId={id}
        service={service}
        tabId={tabId}
      />
      <div style={contentStyle}>
        <div style={profileSelectorContainer}>
          <ProfileSelector
            profileService={service}
          />
        </div>
        <div style={datePickerContainer}>
          <DatePicker />
          <div>
            <PNGExportButton filename={`buffer-${tabId === 'overview' ? 'overview' : 'posts'}-analytics`} />
            <CSVExportButton filename={`buffer-${tabId === 'overview' ? 'overview' : 'posts'}-analytics`} />
          </div>
        </div>
        <Divider marginTop="1rem" marginBottom="1rem" />
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
