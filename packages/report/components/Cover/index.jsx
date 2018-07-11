import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '@bufferapp/components';

import {
  black,
  white,
} from '@bufferapp/components/style/color';

import DateRange from '../DateRange';

const Page = styled.article`
  position: relative;
  overflow-y: hidden;
  height: 1446px; /* this seems to be the exact A4 portrait size */
  margin: 0;
  padding: 0;

  @media print {
    page-break-after: always;
  }
`;

const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 4.5rem 1.5rem;
  background: ${white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Wrapper = styled.div``;

const Inner = styled.div`
  padding: 0 0 28rem;
`;

const Title = styled.h1`
  display: block;
  color: ${black};
  font-size: 5rem;
  font-weight: 700;
  margin: 0 0 1rem;
`;

const Description = styled.h2`
  display: inline-block;
  color: ${black};
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 .5rem 0;
  margin-top: 20px;
  text-align: center;
  max-width: 80%;
`;

const Logo = styled.img`
  display: block;
  margin: 8rem auto 0;
  min-width: 100px;
  max-width: 300px;
  height: auto;
  max-height: 300px;
`;

const Cover = ({ dateRange, logoUrl, name, description }) =>
  <Page>
    <Container>
      <Wrapper>
        <Inner>
          <Text>
            <Title>{name}</Title>
            <DateRange {...dateRange} large />
            <Description>{description}</Description>
          </Text>
        </Inner>
        {logoUrl && <Logo src={logoUrl} alt={name} />}
      </Wrapper>
    </Container>
  </Page>;

Cover.defaultProps = {
  dateRange: {},
  name: '',
  description: '',
  logoUrl: null,
};

Cover.propTypes = {
  dateRange: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  name: PropTypes.string,
  description: PropTypes.string,
  logoUrl: PropTypes.string,
};

export default Cover;
