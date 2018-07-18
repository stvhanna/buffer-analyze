import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '@bufferapp/components';

import {
  outerSpace,
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
  align-items: top;
  text-align: center;
`;

const Inner = styled.div`
  padding: 8rem 0 48rem;
`;

const Title = styled.h1`
  display: block;
  color: ${outerSpace};
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0 0 0.8rem;
`;

const Description = styled.h2`
  display: block;
  color: ${outerSpace};
  font-size: 0.9rem;
  font-weight: 400;
  margin: 1rem auto 0;
  text-align: center;
  line-height: 1.4;
  padding: 0 2rem;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 12rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: auto;
  min-width: 100px;
  max-width: 150px;
  height: auto;
  max-height: 150px;
`;

const Cover = ({ dateRange, logoUrl, name, description }) =>
  <Page>
    <Container>
      <div>
        <Inner>
          <Text>
            <Title>{name}</Title>
            <DateRange {...dateRange} />
            {description && <Description>{description}</Description>}
          </Text>
        </Inner>
        {logoUrl && (
          <Bottom>
            <Logo src={logoUrl} alt={name} />
          </Bottom>
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
