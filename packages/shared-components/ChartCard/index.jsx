import React from 'react';
import PropTypes from 'prop-types';
import { white } from '@bufferapp/components/style/color';

const style = {
  background: `${white}`,
  border: '1px solid #E2E8ED',
  boxShadow: '0px 0px 10px rgba(48, 71, 89, 0.05)',
  borderRadius: '5px',
};

const ChartCard = ({ children }) =>
  <div style={style}>{children}</div>;

ChartCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChartCard;
