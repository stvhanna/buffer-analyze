const avatarUrl = 'https://buffer-uploads.s3.amazonaws.com/503a5c8ffc99f72a7f00002e/f49c2ff693f1c307af5e1b3d84e581ca.png';

const twitterProfiles = [
  {
    avatarUrl,
    username: 'Buffer',
    id: '1',
    service: 'twitter',
    organizationId: 'organization1234',
  },
  {
    avatarUrl,
    username: 'Joel Gascoigne',
    id: '2',
    service: 'twitter',
    organizationId: 'organization1234',
  },
];

const facebookProfiles = [
  {
    avatarUrl,
    username: 'Buffer',
    id: '3',
    service: 'facebook',
    organizationId: 'organization1234',
  },
];

const instagramProfiles = [
  {
    avatarUrl,
    username: 'Buffer',
    id: '4',
    service: 'instagram',
    organizationId: 'organization1234',
  },
];

export default [...twitterProfiles, ...facebookProfiles, ...instagramProfiles];
