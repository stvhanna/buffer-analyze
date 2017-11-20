import React from 'react';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';

const TitleWrapper = styled.h2`
  margin: 0;
  padding: 0;
`;

const Title = () =>
  <TitleWrapper>
    <Text weight="bold" size="large">
      Audience comparison
    </Text>
  </TitleWrapper>
;

export default Title;
