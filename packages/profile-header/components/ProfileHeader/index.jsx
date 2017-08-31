import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

import {
  CircleFacebookIcon,
  CircleInstagramIcon,
  CircleTwitterIcon,
  Image,
  Text,
} from '@bufferapp/components';

import {
  outerSpaceUltraLight,
} from '@bufferapp/components/style/color';

import styles from '../../styles.less';


const socialIconSize = 16;
const avatarSize = 32;

export const SocialIcon = ({ service }) => {
  let icon;
  switch (service) {
    case 'twitter':
      icon = <CircleTwitterIcon color={service} size={{ width: '100%', height: '100%' }} />;
      break;
    case 'facebook':
      icon = <CircleFacebookIcon color={service} size={{ width: '100%', height: '100%' }} />;
      break;
    case 'instagram':
      // TODO using this as it's the only red we have
      // but we need to change it to match instagram color
      icon = <CircleInstagramIcon color={'torchRed'} size={{ width: '100%', height: '100%' }} />;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <div
      style={{
        background: '#fff',
        position: 'absolute',
        width: `${socialIconSize}px`,
        height: `${socialIconSize}px`,
        top: `${avatarSize - socialIconSize}px`,
        left: `${avatarSize - socialIconSize}px`,
        borderRadius: '50%',
      }}
    >
      {icon}
    </div>
  );
};

SocialIcon.propTypes = {
  service: PropTypes.oneOf(['twitter', 'facebook', 'instagram']).isRequired,
};

export const ProfileBadge = ({ avatarUrl, service }) => {
  const avatarPixelSize = `${avatarSize}px`;
  return (
    <div style={{
      position: 'relative',
      marginRight: '10px',
      width: avatarPixelSize,
      height: avatarPixelSize,
      background: outerSpaceUltraLight,
      borderRadius: '50%',
    }}
    >
      <Image
        border={'circle'}
        src={avatarUrl}
        height={avatarPixelSize}
        width={avatarPixelSize}
      />
      <SocialIcon service={service} />
    </div>
  );
};

ProfileBadge.propTypes = {
  service: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

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
        <ProfileBadge avatarUrl={profile.avatarUrl} service={profile.service} />
        <div className={styles.sectionProfileAvatarDetails}>
          <span className={styles.profileAvatarDetailHeader}>
            <a href={profile.service_link} rel="noopener noreferrer" target="_blank">
              <Text size="small">{profile.username}</Text>
            </a>
          </span>
          <span className={styles.profileAvatarDetailSubHeader}>
            <Text size="extra-small" weight="bold">{formatFollowerCount(followersCount)} {followersWording}</Text>
          </span>
        </div>
      </div>
      <a href={helpLinkUrl} rel="noopener noreferrer" target="_blank">
        <span className={styles.profileAvatarDetailNote}>
          <Text size="extra-small" weight="thin">Analytics updated daily</Text>
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

export default ProfileHeader;
