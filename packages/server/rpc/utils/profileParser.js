module.exports = profile => ({
  id: profile.id,
  avatarUrl: profile.avatar,
  service: profile.service,
  timezone: profile.timezone,
  username: profile.service_username,
  selected: false,
});
