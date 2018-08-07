import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { curiousBlue } from '@bufferapp/components/style/color';
import { MessageIcon } from '@bufferapp/components';

import {
  Text,
  Link,
} from '@bufferapp/components';

const InnerLink = styled.span`
  display: flex;
  align-items: flex-start;
  padding: 0.75rem 0.5rem;
  margin: 0 0.5rem;
  border-radius: 4px;

  &:hover > span {
    color: ${curiousBlue} !important;
  }
`;

const TextWrapper = styled.span`
  margin-left: .5rem;
  display: inline-flex;
`;

const FeedbackLink = ({ children, email }) => (
  <Link unstyled href={`mailto:${email}?subject=Analyze feedback`}>
    <InnerLink>
      <MessageIcon /> <TextWrapper><Text size="small" color="shuttleGray">{children}</Text></TextWrapper>
    </InnerLink>
  </Link>
);

FeedbackLink.propTypes = {
  children: PropTypes.node.isRequired,
  email: PropTypes.node.isRequired,
};

export default FeedbackLink;
