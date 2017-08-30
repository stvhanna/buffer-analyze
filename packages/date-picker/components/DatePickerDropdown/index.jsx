import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './date-picker-dropdown.less';

const Dropdown = (isOpen, children) => {
  const dropDownClass = classNames(styles.dropDown, {
    [styles.open]: isOpen,
  });

  return (
    <div className={dropDownClass}>
      {children}
    </div>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dropdown;
