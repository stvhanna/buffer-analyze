const avatarUrl = 'https://buffer-uploads.s3.amazonaws.com/503a5c8ffc99f72a7f00002e/f49c2ff693f1c307af5e1b3d84e581ca.png';

const twitterProfiles = [
  {
    avatarUrl,
    username: 'Buffer',
    id: '1',
    service: 'twitter',
    timezone: 'America/Los_Angeles',
  },
  {
    avatarUrl,
    username: 'Joel Gascoigne',
    id: '2',
    service: 'twitter',
    timezone: 'America/Los_Angeles',
  },
];

const facebookProfiles = [
  {
    avatarUrl,
    username: 'Buffer',
    id: '3',
    service: 'facebook',
    timezone: 'America/Los_Angeles',
  },
];

const instagramProfiles = [
  {
    avatarUrl,
    username: 'Buffer Instagram',
    id: '4',
    service: 'instagram',
    timezone: 'America/Los_Angeles',
  },
];

export default [...twitterProfiles, ...facebookProfiles, ...instagramProfiles];
