import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import styled from 'styled-components';
import { Text } from '@bufferapp/components';
import { ProfileBadge } from '@bufferapp/analyze-shared-components';

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
  margin: 0 0 0 0.25rem;
`;

const Header = styled.span`
  display: block;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: #323b43;
  &:hover {
    text-decoration: none;
  }
  a {
    color: #323b43;
    text-decoration: none;
  }
`;

const Subheader = styled.span`
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
  color: #323b43;
`;

const Note = styled.a`
  float: right;
  display: block;
  height: 100%;
  display: flex;
  align-items: center;
  color: #666C72;
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
          avatarSize={32}
          socialIconSize={16}
        />
        <Details>
          <Header>
            <a href={profile.service_link} rel="noopener noreferrer" target="_blank">
              <Text size="extra-small" weight="bold" color="outerSpace">{profile.username}</Text>
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
