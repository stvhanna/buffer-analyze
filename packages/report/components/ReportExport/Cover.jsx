import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '@bufferapp/components';

import {
  black,
  white,
} from '@bufferapp/components/style/color';

import DateRange from '../DateRange';

const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 4.5rem 4rem;
  background: ${white};
  display: flex;
  align-items: center;
`;

const Inner = styled.div`
  padding: 0 0 16rem;
`;

const Title = styled.h1`
  display: block;
  color: ${black};
  font-size: 5rem;
  font-weight: 700;
  margin: 0 0 1rem;
`;

const Logo = styled.img`
  display: block;
  margin: 0 0 2rem;
`;

const Cover = ({ dateRange, logoUrl, name }) =>
  <Container>
    <Inner>
      <Text>
        { logoUrl && <Logo src={logoUrl} alt={name} /> }
        <Title>{name}</Title>
        <DateRange {...dateRange} large />
      </Text>
    </Inner>
  </Container>;

Cover.defaultProps = {
  dateRange: {},
  name: '',
  logoUrl: null,
};

Cover.propTypes = {
  dateRange: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  name: PropTypes.string,
  logoUrl: PropTypes.string,
};

export default Cover;
