import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import DatePicker from '@bufferapp/analyze-date-picker';
import ProfileLoader from '@bufferapp/profile-loader';
import MultiProfileSelector from '@bufferapp/multi-profile-selector';
import ComparisonChart from '@bufferapp/comparison-chart';
import { EmptyState, Toolbar } from '@bufferapp/analyze-shared-components';

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

const comparisonsContainer = {
  background: '#FAFAFA', // TODO: Need to add this color to buffer components
  overflowY: 'auto',
  display: 'flex',
  flex: 1,
};

const comparisonsMaxWidth = {
  width: '920px',
  margin: '0 auto',
  padding: '2.5rem',
};

const toolbarRight = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const toolbarProfileSelector = {
  display: 'flex',
  alignContent: 'center',
};

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

const ComparisonsPage = ({ location, isCompareProfileClicked }) => (
  <div style={pageStyle}>
    <NavSidebar route={location.pathname} />
    <ProfileLoader>
      <div style={contentStyle}>
        <Toolbar>
          <div style={toolbarProfileSelector}>
            <MultiProfileSelector />
          </div>
          <div style={toolbarRight}>
            <div style={toolbarDatePicker}>
              <DatePicker staticData />
            </div>
          </div>
        </Toolbar>
        <div style={comparisonsContainer}>
          {
            isCompareProfileClicked ?
              <div style={comparisonsMaxWidth}>
                <ComparisonChart metricKey="engagement" />
                <ComparisonChart metricKey="likes" />
                <ComparisonChart metricKey="comments" />
                <ComparisonChart metricKey="reach" />
                <ComparisonChart metricKey="audience" />
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
  isCompareProfileClicked: PropTypes.bool,
};

ComparisonsPage.defaultProps = {
  isCompareProfileClicked: false,
};

function mapStateToProps({ multiProfileSelector }) {
  return {
    isCompareProfileClicked: multiProfileSelector.isCompareProfileClicked,
  };
}

export default connect(mapStateToProps)(ComparisonsPage);
