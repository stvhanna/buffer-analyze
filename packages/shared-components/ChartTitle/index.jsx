import React from 'react';
import Text from '@bufferapp/components/Text';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.h2`
  margin: 0;
  padding: 0;
`;

const Title = ({ children, forReport }) => (
  <Header>
    <Text color={forReport ? 'black' : 'outerSpace'} weight="semi-bold" size="large">
      {children}
    </Text>
  </Header>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  forReport: PropTypes.bool,
};

Title.defaultProps = {
  forReport: false,
};

export default Title;
