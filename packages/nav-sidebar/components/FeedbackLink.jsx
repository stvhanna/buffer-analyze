import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Text,
  Link,
} from '@bufferapp/components';

const InnerLink = styled.span`
  display: block;
  padding: 0.75rem 0.5rem;
  margin: 0 0.5rem;
  border-radius: 4px;

  &:hover > span {
    color: #168eea !important;
  }
`;

const FeedbackLink = ({ children, email }) => (
  <Link unstyled href={`mailto:${email}?subject=Analyze feedback`}>
    <InnerLink>
      <Text color="shuttleGray">{children}</Text>
    </InnerLink>
  </Link>
);

FeedbackLink.propTypes = {
  children: PropTypes.node.isRequired,
  email: PropTypes.node.isRequired,
};

export default FeedbackLink;
