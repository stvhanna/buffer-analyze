import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TabNavigation from './components/TabNavigation';
// import { generateProfilePageRoute } from '@bufferapp/publish-routes';

// default export = container
// export default connect(
//   state => ({
//     // add state here
//   }),
// )(TabNavigation);

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

export const generateProfilePageRoute = ({ profileId, tabId }) =>
  `/insights/facebook/${profileId}/tab/${tabId}`;

export const profilePageRoute = generateProfilePageRoute({
  profileId: ':profileId',
  tabId: ':tabId',
});


export default connect(
  (state, ownProps) => ({
    selectedTabId: ownProps.tabId,
  }),
  (dispatch, ownProps) => ({
    onTabClick: tabId => dispatch(push(generateProfilePageRoute({
      tabId,
      profileId: ownProps.profileId,
    }))),
  }),
)(TabNavigation);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
