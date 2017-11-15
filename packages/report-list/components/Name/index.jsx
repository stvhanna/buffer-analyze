import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Text,
} from '@bufferapp/components';

const Name = styled.span`
  color: #343E47;
`;

const NameComponent = ({ name, small }) =>
  <Text size={small ? 'small' : null} weight="bold"><Name>{name}</Name></Text>;

NameComponent.defaultProps = {
  small: false,
};

NameComponent.propTypes = {
  name: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default NameComponent;
