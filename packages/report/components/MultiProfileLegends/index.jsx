import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProfileLegend from '../ProfileLegend';

const Container = styled.div`
  padding: 0 0.5rem 0 0;
  display: flex;
  justify-content: flex-start;
`;

const MultiProfileLegends = ({ profiles, comparedProfileIds }) => {
  const comparedProfiles = profiles.filter(profile => (
    comparedProfileIds.includes(profile.id)
  ));

  return (
    <Container>
      {comparedProfiles.map(profile => <ProfileLegend profile={profile} />)}
    </Container>
  );
};

MultiProfileLegends.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  comparedProfileIds: PropTypes.arrayOf(PropTypes.number),
};

MultiProfileLegends.defaultProps = {
  comparedProfileIds: [],
};

export default MultiProfileLegends;
