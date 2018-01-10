import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Text, Divider, Link } from '@bufferapp/components';
import NavSidebar from '@bufferapp/nav-sidebar';
import { ChartCard } from '@bufferapp/analyze-shared-components';

const pageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
  background: '#FAFAFA'
};

const defaultPageStyle = {
  width: '52rem',
  margin: '0 auto',
  padding: '2.5rem 1rem 4rem',
};

const cardContentStyle = {
  padding: '1.5rem',
  lineHeight: '1.5rem'
};

const cardLinkStyle = {
  textDecoration: 'none',
  color: 'rgb(22, 142, 234)'
};

const getFirstProfileForService = (service, profiles) => (
  profiles.find(profile => profile.service === service)
);


const DefaultPage = ({ location, profiles }) => {

  let facebookLink = 'Facebook Pages';
  let twitterLink = 'Twitter Profiles';
  let instagramLink = 'Instagram Profiles';

  let facebookInsightsURL = '#';
  let twitterInsightsURL = '#';
  let instagramInsightsURL = '#';
  const comparisonsLink = '/comparisons';
  const reportsLink = '/reports';

  if (profiles.length > 0) {
    const facebookProfile = getFirstProfileForService('facebook', profiles);
    const twitterProfile = getFirstProfileForService('twitter', profiles);
    const instagramProfile = getFirstProfileForService('instagram', profiles);

    if (facebookProfile) {
      facebookInsightsURL = `/insights/facebook/${facebookProfile.id}/overview`;
      facebookLink = (<a href={facebookInsightsURL} style={cardLinkStyle}>Facebook Pages</a>);
    }

    if (twitterProfile) {
      twitterInsightsURL = `/insights/twitter/${twitterProfile.id}/overview`;
      twitterLink = (<a href={twitterInsightsURL} style={cardLinkStyle}>Twitter Profiles</a>);
    }

    if (instagramProfile) {
      instagramInsightsURL = `/insights/instagram/${instagramProfile.id}/overview`;
      instagramLink = (<a href={instagramInsightsURL} style={cardLinkStyle}>Instagram Profiles</a>);
    }
  }

  let welcomeText = (
    <span>
    Get started by viewing Insights for {facebookLink}, {twitterLink} or {instagramLink}. You can also <a href={comparisonsLink} style={cardLinkStyle}>compare profiles</a> or view <a href={reportsLink} style={cardLinkStyle}>your reports</a>.
    </span>
  );

  return (
  <div style={pageStyle}>
    <NavSidebar route={location.pathname} />
    <div style={defaultPageStyle}>
      <ChartCard>
        <div style={cardContentStyle}>
          <Text size="large">Welcome to Buffer Analyze 🎉</Text>
          <Divider marginBottom="1.5rem"/>
          <Text>
            {welcomeText}
          </Text>
        </div>
      </ChartCard>
    </div>
  </div>
  );
}

DefaultPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired
};

function mapStateToProps (state) {
  return {
    profiles: state.navSidebar.profiles
  }
}

export default connect(mapStateToProps)(DefaultPage);
