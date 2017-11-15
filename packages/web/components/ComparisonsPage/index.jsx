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
  padding: '0.75rem 0.5rem',
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

const ComparisonsPage = ({
  location,
}) => (
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
              <DatePicker />
            </div>
          </div>
        </div>
        <div style={comparisonsContainer}>
          <div style={comparisonsMaxWidth}>
            <AudienceComparisonChart />
            <ReachComparisonChart />
          </div>
        </div>
      </div>
    </ProfileLoader>
  </div>
);

ComparisonsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect()(ComparisonsPage);
