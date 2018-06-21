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
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Wrapper = styled.div``;

const Inner = styled.div`
  padding: 0 8rem 24rem;
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
  margin: 4rem auto 0;
  max-width: 300px;
  max-height: 300px;
`;

const Cover = ({ dateRange, logoUrl, name }) =>
  <Container>
    <Wrapper>
      <Inner>
        <Text>
          <Title>{name}</Title>
          <DateRange {...dateRange} large />
        </Text>
      </Inner>
      {logoUrl && <Logo src={logoUrl} alt={name} />}
    </Wrapper>
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
