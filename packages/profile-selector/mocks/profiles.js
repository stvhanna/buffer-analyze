const avatarUrl = 'https://buffer-uploads.s3.amazonaws.com/503a5c8ffc99f72a7f00002e/f49c2ff693f1c307af5e1b3d84e581ca.png';

const twitterProfiles = [
  {
    avatarUrl,
    username: 'Buffer',
    id: 1,
    selected: false,
    service: 'twitter',
  },
  {
    avatarUrl,
    username: 'Joel Gascoigne',
    id: 2,
    selected: true,
    service: 'twitter',
  },
];

const facebookProfiles = [
  {
    avatarUrl,
    username: 'Buffer',
    id: 3,
    selected: false,
    service: 'facebook',
  },
];

const instagramProfiles = [
  {
    avatarUrl,
    username: 'Buffer',
    id: 4,
    selected: false,
    service: 'instagram',
  },
];

export default [...twitterProfiles, ...facebookProfiles, ...instagramProfiles];
