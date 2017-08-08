import React from 'react';
import Icon from '../../Icon';

const ClickIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M5.21779631,11.9494755 C2.27366981,11.5661698 0,9.04860692 0,6 C0,2.6862915 2.6862915,0 6,0 C9.23196141,0 11.8670799,2.5553881 11.9951265,5.75593513 L9.77085735,4.66233163 C9.22052002,3.11100668 7.74000477,2 6,2 C3.790861,2 2,3.790861 2,6 C2,7.80949838 3.20152328,9.33836596 4.85026989,9.83230278 L5.21779631,11.9494755 Z M6.17748666,5.97617662 C6.07946348,5.43704916 6.40439725,5.20219862 6.88743329,5.44371665 L15.1125667,9.55628335 C15.6026826,9.80134129 15.5703705,10.1022927 15.0248191,10.2321859 L10.9892238,11.193042 C10.8571041,11.224499 10.6925623,11.3492105 10.6246923,11.4664406 L8.50439239,15.1287768 C8.22582416,15.6099401 7.91912055,15.555163 7.82251334,15.0238234 L6.17748666,5.97617662 Z" />
  </Icon>;

ClickIcon.propTypes = {
  ...Icon.propTypes,
};

export default ClickIcon;
