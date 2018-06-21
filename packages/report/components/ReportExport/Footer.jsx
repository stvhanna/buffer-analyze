import React from 'react';
import styled from 'styled-components';
import { Text } from '@bufferapp/components';

import {
  geyser,
  white,
} from '@bufferapp/components/style/color';

const Container = styled.footer`
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  padding: 2rem 4rem;
  background: ${white};
  border-top: 1px solid ${geyser};
  position: absolute;
  bottom: 0;
  left: 0;

  @media print {
    > span:after {
      counter-increment: page;
      content: counter(page);
    }
  }
`;

const Footer = () =>
  <Container>
    <Text>Page </Text>
  </Container>;

export default Footer;
