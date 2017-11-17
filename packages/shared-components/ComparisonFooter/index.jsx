import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '@bufferapp/components/Text';

import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  GridItem,
  MetricIcon,
} from '@bufferapp/analyze-shared-components';

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0 10px;
  margin: 0 auto;
  border: solid 1px ${geyser};
  border-top-style: none;
  border-radius: 2px;
`;

const Wrapper = styled.section`
  min-height: 12rem;
  position: relative;
  margin: 0 0 1.5rem;
`;

const ProfileAvatarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;
const ProfileUsernameWrapper = styled.div`
  margin-right: 10px;
`;

const ComparisonFooter = ({ profileTotals }) => (
  <Wrapper>
    <Grid>
      {profileTotals.map(total =>
        // {
        //   total.service === 'instagram' && (
        //       total.metric.label === 'Impressions' || total.metric.label === 'Engagements'
        //     ) ?
        //       <Text color="nevada" size="small">Coming soon for Instagram</Text>
        //     :
        //       <MetricIcon key={total.profileId} metric={total.metric} />
        // }
      <GridItem
        key={total.profileId}
        metric={{
          label: total.metric.label,
          value: total.currentPeriodTotal,
          diff: total.currentPeriodDiff,
        }}
        customLabel={
          <ProfileAvatarWrapper>
            <ProfileUsernameWrapper>
              <Text size="small">
                {total.username}
              </Text>
            </ProfileUsernameWrapper>
          </ProfileAvatarWrapper>
        }
      />)}
    </Grid>
  </Wrapper>
);

ComparisonFooter.defaultProps = {
  loading: false,
};

ComparisonFooter.propTypes = {
  profileTotals: PropTypes.arrayOf(PropTypes.shape({
    metric: PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    currentPeriodTotal: PropTypes.number.isRequired,
    currentPeriodDiff: PropTypes.number.isRequired,
    profileId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    service: PropTypes.string,
  })).isRequired,
};

export default ComparisonFooter;

