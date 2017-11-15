import React from 'react';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';

const TitleWrapper = styled.h2`
  margin: '2rem 0 1rem',
`;

const Title = () =>
  <TitleWrapper>
    <Text weight="bold" size="extra-large">
      Reach comparison
    </Text>
  </TitleWrapper>
;

export default Title;

