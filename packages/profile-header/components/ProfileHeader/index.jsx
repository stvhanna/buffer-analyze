import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { Text } from '@bufferapp/components';
import { ProfileBadge } from '@bufferapp/analyze-shared-components';
import styles from '../../styles.less';

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
    <div className={styles.sectionProfileAvatar}>
      <div className={styles.profileAvatarWrapper}>
        <ProfileBadge
          avatarUrl={profile.avatarUrl}
          service={profile.service}
          avatarSize={32}
          socialIconSize={16}
        />
        <div className={styles.sectionProfileAvatarDetails}>
          <span className={styles.profileAvatarDetailHeader}>
            <a href={profile.service_link} rel="noopener noreferrer" target="_blank">
              <Text size="extra-small" weight="bold">{profile.username}</Text>
            </a>
          </span>
          <span className={styles.profileAvatarDetailSubHeader}>
            <Text size="extra-small">{formatFollowerCount(followersCount)} {followersWording}</Text>
          </span>
        </div>
      </div>
      <a href={helpLinkUrl} rel="noopener noreferrer" target="_blank">
        <span className={styles.profileAvatarDetailNote}>
          <Text size="extra-small">Analytics updated daily</Text>
        </span>
      </a>
    </div>
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
