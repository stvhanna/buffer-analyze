import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { curiousBlue } from '@bufferapp/components/style/color';
import { Link, ClockIcon, Text } from '@bufferapp/components';

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  margin: 0 0.5rem;
  border-radius: 4px;
`;

const TextWrapper = styled.span`
  margin-left: .5rem;
  margin-right: auto;
  display: inline-flex;
`;

const IconWrapper = styled.span`
  width: 16px;
  height: 16px;
`;

const formatRemainingDays = (days) => {
  if (days === 0) {
    return 'today';
  }
  return `in ${days} ${days > 1 ? 'days' : 'day'}`;
};

const AccountManagementLink = ({ isOwner, organizationId, children }) => {
  if (isOwner) {
    return <Link unstyled href={`https://buffer.com/manage/${organizationId}/analyze`}>{ children }</Link>;
  }
  return (<span>
    { children }
  </span>);
};

AccountManagementLink.propTypes = {
  isOwner: PropTypes.bool,
  organizationId: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AccountManagementLink.defaultProps = {
  isOwner: false,
  organizationId: null,
};

const TrialStatus = ({ onTrial, daysRemaining, organizationId, isOwner }) => {
  if (!onTrial) {
    return null;
  }
  return (
    <Wrapper>
      <IconWrapper><ClockIcon size={{ width: '13px', height: '13px' }} color={curiousBlue} /></IconWrapper>
      <TextWrapper>
        <AccountManagementLink isOwner={isOwner} organizationId={organizationId}>
          <Text size="small" color="curiousBlue">Trial ends {formatRemainingDays(daysRemaining)}</Text>
        </AccountManagementLink>
      </TextWrapper>
    </Wrapper>
  );
};

TrialStatus.propTypes = {
  daysRemaining: PropTypes.number,
  onTrial: PropTypes.bool,
  isOwner: PropTypes.bool,
  organizationId: PropTypes.string,
};

TrialStatus.defaultProps = {
  daysRemaining: 0,
  onTrial: false,
  isOwner: false,
  organizationId: null,
};

export default TrialStatus;
