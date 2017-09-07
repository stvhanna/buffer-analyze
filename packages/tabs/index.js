import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TabNavigation from './components/TabNavigation';

const profileRouteRegex = /insights\/facebook\/(\w+)\/tab\/(\w+)/;
export const getProfilePageParams = ({ path }) => {
  const match = profileRouteRegex.exec(path);
  if (!match) {
    return null;
  }
  return {
    profileId: match[1],
    tabId: match[2],
  };
};

export const generateInsightsTabRoute = ({ profileId, tabId }) =>
  `/insights/facebook/${profileId}/tab/${tabId}`;

export const profilePageRoute = generateInsightsTabRoute({
  profileId: ':profileId',
  tabId: ':tabId',
});


export default connect(
  (state, ownProps) => ({
    selectedTabId: ownProps.tabId,
  }),
  (dispatch, ownProps) => ({
    onTabClick: tabId => dispatch(push(generateInsightsTabRoute({
      tabId,
      profileId: ownProps.profileId,
    }))),
  }),
)(TabNavigation);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
