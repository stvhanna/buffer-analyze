import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import DatePicker from '@bufferapp/analyze-date-picker';
import ProfileLoader from '@bufferapp/profile-loader';
import { white, mystic } from '@bufferapp/components/style/color';
import MultiProfileSelector from '@bufferapp/multi-profile-selector';
import AudienceComparisonChart from '@bufferapp/audience-comparison-chart';
import ReachComparisonChart from '@bufferapp/reach-comparison-chart';
import LikesComparisonChart from '@bufferapp/likes-comparison-chart';
import EngagementComparisonChart from '@bufferapp/engagement-comparison-chart';
import CommentsComparisonChart from '@bufferapp/comments-comparison-chart';
import { EmptyState } from '@bufferapp/analyze-shared-components';

const pageStyle = {
  display: 'flex',
};

const contentStyle = {
  flexGrow: 1,
  height: '100vh',
  maxWidth: '100%',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
};

const toolbarContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  background: `${white}`,
  padding: '0.85rem 0.5rem',
  marginbottom: '1rem',
  borderBottom: `1px solid ${mystic}`,
  boxSizing: 'border-box',
};

const comparisonsContainer = {
  background: '#FAFAFA', // TODO: Need to add this color to buffer components
  overflowY: 'auto',
  display: 'flex',
  flex: 1,
};

const comparisonsMaxWidth = {
  width: '52rem',
  margin: '0 auto',
  padding: '2.5rem',
};

const toolbarTabNavigation = {};

const toolbarRight = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const toolbarProfileSelector = {};

const toolbarDatePicker = {
  marginLeft: '0.5rem',
};

const centeredContainer = {
  display: 'flex',
  width: '100%',
  height: '90%',
  justifyContent: 'center',
  alignItems: 'center',
};

const ComparisonsPage = ({ location, profilesSelected }) => (
  <div style={pageStyle}>
    <NavSidebar route={location.pathname} />
    <ProfileLoader>
      <div style={contentStyle}>
        <div style={toolbarContainer}>
          <div style={toolbarTabNavigation} />
          <div style={toolbarRight}>
            <div style={toolbarProfileSelector}>
              <MultiProfileSelector />
            </div>
            <div style={toolbarDatePicker}>
              <DatePicker staticData />
            </div>
          </div>
        </div>
        <div style={comparisonsContainer}>
          {
            profilesSelected ?
              <div style={comparisonsMaxWidth}>
                <AudienceComparisonChart />
                <ReachComparisonChart />
                <LikesComparisonChart />
                <EngagementComparisonChart />
                <CommentsComparisonChart />
              </div>
              :
              <div style={centeredContainer}>
                <EmptyState
                  header="No profiles are currently selected"
                  description="Please choose two or more profiles from the dropdown"
                />
              </div>
          }
        </div>
      </div>
    </ProfileLoader>
  </div>
);

ComparisonsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  profilesSelected: PropTypes.bool,
};

ComparisonsPage.defaultProps = {
  profilesSelected: false,
};

function mapStateToProps({ multiProfileSelector }) {
  return {
    profilesSelected: multiProfileSelector.selectedProfiles.length > 0,
  };
}

export default connect(mapStateToProps)(ComparisonsPage);
