import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { geyser } from '@bufferapp/components/style/color';
import Loader from '@bufferapp/components/Loader';

const Container = styled.div`
  background: none;
  border-radius: 2px;
  flex-direction: row;
  flex: 1;
`;

const Wrapper = styled.div`
  z-index: 2;
  text-align: center;
  border: ${props => (props.noBorder ? 'none' : `solid 1px ${geyser}`)};
  background: ${props => (props.transparent ? 'transparent' : 'rgba(255,255,255,.95)')};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.large ? '20rem' : '8rem')};
  max-height: ${props => (props.maxHeight ? props.maxHeight : 'none')};
  transition: opacity 350ms ease-in-out;
`;

const Loading = ({ text, maxHeight, noBorder, transparent, large }) => (
  <Wrapper
    noBorder={noBorder}
    transparent={transparent}
    large={large}
    maxHeight={maxHeight}
  >
    <Container>
      <Loader>{text}</Loader>
    </Container>
  </Wrapper>
);

Loading.propTypes = {
  text: PropTypes.string,
  maxHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  noBorder: PropTypes.bool,
  transparent: PropTypes.bool,
  large: PropTypes.bool,
};

Loading.defaultProps = {
  text: 'Loading...',
  maxHeight: false,
  noBorder: false,
  transparent: false,
  large: false,
};

export default Loading;
