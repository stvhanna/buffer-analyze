const avatarUrl = 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10403026_1055367724535674_7855796462569708170_n.png?oh=2915a2a2325889aae802fd762d081f27&oe=5A2C3281';
const twitterProfiles = [
  {
    avatarUrl,
    username: 'Buffer',
    id: '1',
    service: 'twitter',
  },
  {
    avatarUrl,
    username: 'Brian',
    id: '2',
    service: 'Facebook',
  },
];

const facebookProfiles = [
  {
    avatarUrl,
    username: 'Buffer',
    id: '3',
    service: 'facebook',
  },
];

const instagramProfiles = [
  {
    avatarUrl,
    username: 'Buffer',
    id: '4',
    service: 'instagram',
  },
];

export default [...twitterProfiles, ...facebookProfiles, ...instagramProfiles];
