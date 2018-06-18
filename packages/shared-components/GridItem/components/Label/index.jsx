import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';

const Container = styled.span`
  display: block;
  margin: 0 0 0.2rem;
`;

const Label = ({ tooltip, children }) =>
  <Container>
    <span data-tip={tooltip}>
      <Text color="shuttleGray" size="small">{children}</Text>
    </span>
  </Container>;

Label.defaultProps = {
  tooltip: null,
};

Label.propTypes = {
  tooltip: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Label;
