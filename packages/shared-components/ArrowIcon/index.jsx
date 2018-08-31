import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div` 
  position: relative;
  top: -2px;

  > svg {
    display: block;
  }
`;

const ArrowIcon = ({ diff, upward, downward, color }) => {
  if (diff > 0 || upward) {
    const fillColor = color || '#2FD566';
    return (
      <Container>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="11" height="11" fill="white" />
          <path d="M4.06699 0.75C4.25944 0.416667 4.74056 0.416667 4.93301 0.75L7.9641 6C8.15655 6.33333 7.91599 6.75 7.53109 6.75L1.46891 6.75C1.08401 6.75 0.843448 6.33333 1.0359 6L4.06699 0.75Z" transform="translate(1 2)" fill={fillColor} />
        </svg>
      </Container>
    );
  } else if (diff === 0) {
    const fillColor = color || '#CBCBCB';
    return (
      <Container>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="11" height="11" fill="white" />
          <path d="M4.06699 0.75C4.25944 0.416667 4.74056 0.416667 4.93301 0.75L7.9641 6C8.15655 6.33333 7.91599 6.75 7.53109 6.75L1.46891 6.75C1.08401 6.75 0.843448 6.33333 1.0359 6L4.06699 0.75Z" transform="translate(9 10) scale(-1 1) rotate(-90)" fill={fillColor} />
        </svg>
      </Container>
    );
  } else if (diff < 0 || downward) {
    const fillColor = color || '#FF4040';
    return (
      <Container>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="11" height="11" fill="white" />
          <path d="M4.06699 0.75C4.25944 0.416667 4.74056 0.416667 4.93301 0.75L7.9641 6C8.15655 6.33333 7.91599 6.75 7.53109 6.75L1.46891 6.75C1.08401 6.75 0.843448 6.33333 1.0359 6L4.06699 0.75Z" transform="translate(10 9) rotate(-180)" fill={fillColor} />
        </svg>
      </Container>
    );
  }
  return null;
};

ArrowIcon.propTypes = {
  diff: PropTypes.number,
  color: PropTypes.string,
  downward: PropTypes.bool,
  upward: PropTypes.bool,
};

ArrowIcon.defaultProps = {
  diff: null,
  color: null,
  downward: false,
  upward: false,
};


export default ArrowIcon;
