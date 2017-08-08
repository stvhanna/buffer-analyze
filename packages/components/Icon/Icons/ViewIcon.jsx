import React from 'react';
import Icon from '../../Icon';

const ViewIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M8,4 C12,4 15.2603759,7.33048993 15.2603759,7.33048993 C15.668859,7.70025013 15.6803939,8.30065012 15.2603759,8.66951007 C15.2603759,8.66951007 12,12 8,12 C4,12 0.739624113,8.66951007 0.739624113,8.66951007 C0.331140995,8.29974987 0.319606066,7.69934988 0.739624113,7.33048993 C0.739624113,7.33048993 4,4 8,4 Z M8,10 C9.1045695,10 10,9.1045695 10,8 C10,6.8954305 9.1045695,6 8,6 C6.8954305,6 6,6.8954305 6,8 C6,9.1045695 6.8954305,10 8,10 Z" />
  </Icon>;

ViewIcon.propTypes = {
  ...Icon.propTypes,
};

export default ViewIcon;
