import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import styled from 'styled-components';
import { Text } from '@bufferapp/components';
import { ProfileBadge } from '@bufferapp/analyze-shared-components';

import {
  nevada,
  outerSpace,
} from '@bufferapp/components/style/color';

const Container = styled.div`
  display: flex;
  margin: 0 0 1.5rem;
  padding: 0 0.25rem;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Details = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: 0 0 0 0.1rem;
`;

const Header = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${outerSpace};
  margin: 0 0 0.1rem;

  &:hover {
    text-decoration: none;
  }

  a {
    color: ${outerSpace};
    text-decoration: none;
  }
`;

const Subheader = styled.span`
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
  color: ${outerSpace};
`;

const Note = styled.a`
  float: right;
  display: block;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${nevada};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProfileHeader = ({ profile, followersCount }) => {
  if (!profile) return null;

  let helpLinkUrl = 'https://buffer.com/twitter-overview-analytics-help#getting-your-data';
  let followersWording = 'followers';

  if (profile.service === 'facebook') {
    followersWording = 'fans';
  }

  if (profile.service === 'facebook') {
    helpLinkUrl = 'https://buffer.com/facebook-overview-analytics-help#getting-your-data';
  }

  function formatFollowerCount() {
    return numeral(followersCount).format('0,0');
  }

  return (
    <Container>
      <Wrapper>
        <ProfileBadge
          avatarUrl={profile.avatarUrl}
          service={profile.service}
          avatarSize={36}
          socialIconSize={16}
        />
        <Details>
          <Header>
            <a href={profile.service_link} rel="noopener noreferrer" target="_blank">
              <Text weight="bold" color="outerSpace">{profile.username}</Text>
            </a>
          </Header>
          <Subheader>
            <Text size="extra-small">{formatFollowerCount(followersCount)} {followersWording}</Text>
          </Subheader>
        </Details>
      </Wrapper>
      <Note href={helpLinkUrl} rel="noopener noreferrer" target="_blank">
        <Text size="extra-small">Analytics updated daily</Text>
      </Note>
    </Container>
  );
};

ProfileHeader.propTypes = {
  profile: PropTypes.shape({
    service: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  followersCount: PropTypes.number.isRequired,
};

ProfileHeader.defaultProps = {
  profile: null,
};

export default ProfileHeader;
