import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import DatePicker from '@bufferapp/analyze-date-picker';
import ProfileLoader from '@bufferapp/profile-loader';
import { offWhite, mystic } from '@bufferapp/components/style/color';
import ProfileSelector from '@bufferapp/analyze-profile-selector';
import Divider from '@bufferapp/components/Divider';
import AudienceComparisonChart from '@bufferapp/audience-comparison-chart';
import styled from 'styled-components';
import {
  Tabs,
  Tab,
} from '@bufferapp/publish-shared-components';

const pageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
};

const contentStyle = {
  overflowY: 'auto',
  flexGrow: 1,
};

const profileSelectorContainer = {
  background: offWhite,
  border: `1px solid ${mystic}`,
  padding: '1rem',
  marginTop: '10px',
};

const datePickerContainer = {
  padding: '2rem 0',
  display: 'flex',
  justifyContent: 'space-between',
};

const Content = styled.div`
  max-width: 65rem;
  width: 100%;
`;

const ComparisonsPage = ({
  // match: {
  //   params: {
  //     service,
  //     id,
  //   },
  // },
  location,
}) => (
  <div style={pageStyle}>
    <NavSidebar route={location.pathname} />
    <ProfileLoader>
      <div id="tabs">
        <Tabs
          selectedTabId={'performance'}
        >
          <Tab tabId={'performance'}>Performance</Tab>
        </Tabs>
      </div>
      <div style={contentStyle}>
        <div style={profileSelectorContainer}>
          <ProfileSelector
            profileService={'facebook'}
          />
        </div>
        <div style={datePickerContainer}>
          <DatePicker />
        </div>
        <Divider marginTop="1rem" marginBottom="1rem" />
        <Content>
          <AudienceComparisonChart />
        </Content>
      </div>
    </ProfileLoader>
  </div>
);

ComparisonsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  // match: PropTypes.shape({
  //   params: PropTypes.shape({
  //     service: PropTypes.string,
  //     id: PropTypes.string,
  //   }),
  // }).isRequired,
};

export default connect()(ComparisonsPage);
