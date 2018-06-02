import React from 'react';
import Text from '@bufferapp/components/Text';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.h2`
  margin: 0;
  padding: 0;
`;

const renderForApp = children => (
  <Text color="black" weight="medium" size="large">
    {children}
  </Text>
);

const renderForReport = children => (
  <Text color="black" weight="medium" size="large">
    {children}
  </Text>
);

const Title = ({ children, forReport }) => (
  <Header>
    {forReport ? renderForReport(children) : renderForApp(children)}
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
