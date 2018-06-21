import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '@bufferapp/components';

import {
  black,
  geyser,
  white,
} from '@bufferapp/components/style/color';

import DateRange from '../DateRange';

const Title = styled.h1`
  display: block;
  color: ${black};
  font-size: 2.6rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
`;

const Logo = styled.img`
  max-width: 160px;
  max-height: 80px;
`;

const Container = styled.header`
  padding: 4.5rem 4rem;
  background: ${white};
  border-bottom: 1px solid ${geyser};
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Header = ({ dateRange, logoUrl, name }) =>
  <Container>
    <Text>
      <Title>{name}</Title>
      <DateRange {...dateRange} />
    </Text>
    {logoUrl && <Logo src={logoUrl} />}
  </Container>;

Header.defaultProps = {
  dateRange: {},
  name: '',
  logoUrl: null,
};

Header.propTypes = {
  dateRange: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  name: PropTypes.string,
  logoUrl: PropTypes.string,
};

export default Header;
