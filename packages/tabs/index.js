import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TabNavigation from './components/TabNavigation';

export const generateInsightsTabRoute = ({ profileId, tabId, service }) =>
  `/insights/${service}/${profileId}/${tabId}`;

export default connect(
  (state, ownProps) => ({
    selectedTabId: ownProps.tabId,
  }),
  (dispatch, ownProps) => ({
    onTabClick: tabId => dispatch(push(generateInsightsTabRoute({
      tabId,
      profileId: ownProps.profileId,
      service: ownProps.service,
    }))),
  }),
)(TabNavigation);
