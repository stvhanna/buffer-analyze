import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Text, Divider, Link } from '@bufferapp/components';
import NavSidebar from '@bufferapp/nav-sidebar';
import { ChartCard } from '@bufferapp/analyze-shared-components';

const pageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
  background: '#FAFAFA',
};

const defaultPageStyle = {
  width: '52rem',
  margin: '0 auto',
  padding: '2.5rem 1rem 4rem',
};

const cardContentStyle = {
  padding: '1.5rem',
  lineHeight: '1.5rem',
};

const navigate = (event, dispatch, url) => {
  event.preventDefault();
  dispatch(push(url));
};

const DefaultPage = ({ location, dispatch, facebookProfile, twitterProfile, instagramProfile }) => {
  let facebookLink = 'Facebook Pages';
  let twitterLink = 'Twitter Profiles';
  let instagramLink = 'Instagram Profiles';

  const comparisonsLink = (<Link
    href="/comparisons"
    unstyled
    onClick={e => navigate(e, dispatch, '/comparisons')}
  >compare profiles</Link>);
  const reportsLink = (<Link
    href="/reports"
    unstyled
    onClick={e => navigate(e, dispatch, '/reports')}
  >your reports</Link>);

  if (facebookProfile) {
    const facebookInsightsURL = `/insights/facebook/${facebookProfile.id}/overview`;
    facebookLink = (<Link
      href={facebookInsightsURL}
      unstyled
      onClick={e => navigate(e, dispatch, facebookInsightsURL)}
    >Facebook Pages</Link>);
  }

  if (twitterProfile) {
    const twitterInsightsURL = `/insights/twitter/${twitterProfile.id}/overview`;
    twitterLink = (<Link
      href={twitterInsightsURL}
      unstyled
      onClick={e => navigate(e, dispatch, twitterInsightsURL)}
    >Twitter Profiles</Link>);
  }

  if (instagramProfile) {
    const instagramInsightsURL = `/insights/instagram/${instagramProfile.id}/overview`;
    instagramLink = (<Link
      href={instagramInsightsURL}
      unstyled
      onClick={e => navigate(e, dispatch, instagramInsightsURL)}
    >Instagram Profiles</Link>);
  }

  const welcomeText = (
    <span>
      Get started by viewing Insights for {facebookLink}, {twitterLink} or {instagramLink}.
      You can also {comparisonsLink} or view {reportsLink}.
    </span>
  );

  return (
    <div style={pageStyle}>
      <NavSidebar route={location.pathname} />
      <div style={defaultPageStyle}>
        <ChartCard>
          <div style={cardContentStyle}>
            <Text size="large">Welcome to Buffer Analyze 🎉</Text>
            <Divider marginBottom="1.5rem" />
            <Text>
              {welcomeText}
            </Text>
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

DefaultPage.defaultProps = {
  instagramProfile: null,
  twitterProfile: null,
  facebookProfile: null,
};

DefaultPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  instagramProfile: PropTypes.shape({
    service: PropTypes.String,
  }),
  twitterProfile: PropTypes.shape({
    service: PropTypes.String,
  }),
  facebookProfile: PropTypes.shape({
    service: PropTypes.String,
  }),
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps (state) {
  return {
    facebookProfile: state.navSidebar.facebookProfile,
    twitterProfile: state.navSidebar.twitterProfile,
    instagramProfile: state.navSidebar.instagramProfile,
  };
}

export default connect(mapStateToProps)(DefaultPage);
