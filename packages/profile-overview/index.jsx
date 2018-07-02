import React from 'react';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfilesTable from './components/ProfilesTable';

export const ProfilesOverview = props => (<ProfilesTable
  {...props}
/>);

ProfilesOverview.defaultProps = {
  metrics: {},
  profiles: [],
  profilesLoading: true,
};

ProfilesOverview.propTypes = {
  metrics: PropTypes.shape(
    PropTypes.arrayOf(PropTypes.shape({
      diff: PropTypes.number,
      value: PropTypes.number,
    }))),
  profiles: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
  profilesLoading: PropTypes.bool.isRequired,
};

export function getComparableUsername(profile) {
  return profile.username.replace('@', '').toUpperCase();
}

export function sortProfilesAlphabetically(a, b) {
  const aName = getComparableUsername(a);
  const bName = getComparableUsername(b);
  if (aName < bName) {
    return -1;
  } else if (aName > bName) {
    return 1;
  }
  return 0;
}

// default export = container
export default connect(
  state => ({
    profiles: state.profiles.profiles.sort(sortProfilesAlphabetically),
    metrics: state.profilesOverview.data,
  }),
  dispatch => ({
    onOverviewClick: (path, profile) => {
      dispatch(push(path, { profile }));
    },
  }),
)(ProfilesOverview);

// export reducer, action types
export reducer from './reducer';
export middleware from './middleware';
