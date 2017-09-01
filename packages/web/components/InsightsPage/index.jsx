import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import SummaryTable from '@bufferapp/summary-table';
import ProfileSelector from '@bufferapp/analyze-profile-selector';
import ProfileHeader from '@bufferapp/profile-header';
import DatePicker from '@bufferapp/analyze-date-picker';
import ProfileLoader from '@bufferapp/profile-loader';
import Divider from '@bufferapp/components/Divider';
import { offWhite, mystic } from '@bufferapp/components/style/color';

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
};

const InsightsPage = ({ match, location }) => (
  <div style={pageStyle}>
    <NavSidebar route={location.pathname} />
    <div style={pageContentStyle}>
      <ProfileLoader>
        <div style={profileSelectorContainer}>
          <ProfileSelector
            profileService={match.params.service}
          />
        </div>
        <div style={datePickerContainer}>
          <DatePicker />
        </div>
        <Divider marginTop="1rem" marginBottom="1rem" />
        <ProfileHeader selectedProfileId={match.params.id} />
        <SummaryTable profileService={match.params.service} />
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
    }),
  }).isRequired,
};

export default connect()(InsightsPage);
