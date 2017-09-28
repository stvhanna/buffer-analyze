import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  Button,
} from '@bufferapp/components';

import {
  leftButton,
  rightButton,
  activeButton,
} from './style.less';

const ModeToggle = ({ active, handleClick, baseModeLabel, secondaryModeLabel }) => {
  const leftButtonClasses = classNames(leftButton, {
    [activeButton]: !active,
  });

  const rightButtonClasses = classNames(rightButton, {
    [activeButton]: active,
  });

  return (<span style={{ marginLeft: 'auto' }} >
    <Button noStyle onClick={() => { handleClick(0); }} >
      <span className={leftButtonClasses} >
        {baseModeLabel}
      </span>
    </Button>
    <Button noStyle onClick={() => { handleClick(1); }} >
      <span className={rightButtonClasses} >
        {secondaryModeLabel}
      </span>
    </Button>
  </span>);
};

ModeToggle.defaultProps = {
  active: false,
};

ModeToggle.propTypes = {
  active: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  baseModeLabel: PropTypes.string.isRequired,
  secondaryModeLabel: PropTypes.string.isRequired,
};

export default ModeToggle;

