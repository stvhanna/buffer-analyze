import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '@bufferapp/components';

import {
  black,
  white,
} from '@bufferapp/components/style/color';

import DateRange from '../DateRange';

const Title = styled.h1`
  display: block;
  color: ${black};
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
`;

const Logo = styled.img`
  display: block;
  margin: 0 0 2rem;
`;

const Container = styled.header`
  padding: 4.5rem 4rem;
  background: ${white};
  border-bottom: 1px solid #DBE8F1;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = ({ dateRange, logoUrl, name }) =>
  <Container>
    <Text>
      <Inner>
        {logoUrl && <Logo src={logoUrl} />}
        <Title>{name}</Title>
      </Inner>
      <DateRange {...dateRange} />
    </Text>
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
