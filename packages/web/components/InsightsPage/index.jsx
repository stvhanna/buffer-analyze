import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AverageTable from '@bufferapp/average-table';
import NavSidebar from '@bufferapp/nav-sidebar';
import SummaryTable from '@bufferapp/summary-table';
import PostsSummaryTable from '@bufferapp/posts-summary-table';
import ProfileSelector from '@bufferapp/analyze-profile-selector';
import ProfileHeader from '@bufferapp/profile-header';
import DatePicker from '@bufferapp/analyze-date-picker';
import ProfileLoader from '@bufferapp/profile-loader';
import Divider from '@bufferapp/components/Divider';
import TabNavigation from '@bufferapp/tabs';
import { offWhite, mystic } from '@bufferapp/components/style/color';
import PostsTab from '../PostsTab';
import OverviewTab from '../OverviewTab';

const pageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
};

const pageContentStyle = {
  padding: '1rem 2rem',
};

const datePickerContainer = {
  padding: '2rem 0',
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
      <NavSidebar route={location.pathname} />
      <div style={pageContentStyle}>
        <ProfileLoader>
          <TabNavigation
            profileId={id}
            tabId={tabId}
          />
          <div style={profileSelectorContainer}>
            <ProfileSelector
              profileService={service}
            />
          </div>
          <div style={datePickerContainer}>
            <DatePicker />
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
            <Route component={OverviewTab} />
          </Switch>

        </ProfileLoader>
      </div>
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
