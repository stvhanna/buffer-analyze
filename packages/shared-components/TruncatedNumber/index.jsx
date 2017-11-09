import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

const TruncatedNumber = ({ children, absoluteValue, shorterOption }) => {
  let number = children;

  if (number < 0 && absoluteValue) {
    number *= -1;
  }

  let formattedNumber = number;

  if (number > 1000000) {
    formattedNumber = numeral(number).format('0.[00]a');
  } else if (shorterOption && number >= 100000) {
    formattedNumber = numeral(number).format('0a');
  } else if (number >= 10000) {
    formattedNumber = numeral(number).format('0.0a');
  } else if (number < 1 && number > 0) {
    formattedNumber = numeral(number).format('0,0.0');
  } else {
    formattedNumber = numeral(number).format('0,0');
  }

  return <span>{formattedNumber}</span>;
};

TruncatedNumber.defaultProps = {
  absoluteValue: false,
  shorterOption: false,
};

TruncatedNumber.propTypes = {
  children: PropTypes.node.isRequired,
  absoluteValue: PropTypes.bool,
  shorterOption: PropTypes.bool,
};

export default TruncatedNumber;
