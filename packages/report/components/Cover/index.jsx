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
  padding: 12rem 8rem;
  box-sizing: border-box;
  background: ${white};

  @media print {
    page-break-after: always;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Inner = styled.div`
  padding: 8rem 0 48rem;
`;

const Title = styled.h1`
  display: block;
  color: ${black};
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0 0 0.8rem;
`;

const Description = styled.h2`
  display: block;
  color: ${black};
  font-size: 1rem;
  font-weight: 400;
  margin: 8rem auto 0;
  text-align: center;
  line-height: 1.4;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto 1rem;
  width: auto;
  min-width: 100px;
  max-width: 200px;
  height: auto;
  max-height: 200px;
`;

const Cover = ({ dateRange, logoUrl, name, description }) =>
  <Page>
    <Container>
      <div>
        <Inner>
          <Text>
            {logoUrl && <Logo src={logoUrl} alt={name} />}
            <Title>{name}</Title>
            <DateRange {...dateRange} />
          </Text>
        </Inner>
        {description && (
          <Text>
            <Description>{description}</Description>
          </Text>
        )}
      </div>
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
