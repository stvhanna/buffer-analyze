import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';
import ArrowIcon from '../ArrowIcon';
import TruncatedNumber from '../../../TruncatedNumber';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  display: inline-block;
  margin: 0 0.1rem 0 0.25rem;
  height: 0.5rem;
`;

const Value = styled.div`
  display: inline-block;
`;

const Diff = ({ diff }) => {
  if (diff === null) {
    return null;
  }
  let color;
  if (diff > 0) {
    color = 'shamrock';
  } else if (diff < 0) {
    color = 'torchRed';
  } else {
    color = 'nevada';
  }

  return (
    <Container>
      <Icon>
        <ArrowIcon diff={diff} />
      </Icon>
      <Value>
        <Text color={color} weight="bold">
          <TruncatedNumber absoluteValue shorterOption>{diff}</TruncatedNumber>%
        </Text>
      </Value>
    </Container>
  );
};

Diff.defaultProps = {
  diff: null,
};

Diff.propTypes = {
  diff: PropTypes.number,
};

export default Diff;
