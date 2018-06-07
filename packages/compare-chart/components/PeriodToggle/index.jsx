import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  Button,
  Text,
} from '@bufferapp/components';

import {
  periodToggle,
  toggle,
  toggleSwitch,
  toggleSwitchKnob,
  toggleSwitchOn,
  toggleSwitchKnobOn,
} from './style.less';

const PeriodToggle = ({ active, handleClick }) => {
  const toggleSwitchClass = classNames(toggleSwitch, {
    [toggleSwitchOn]: active,
  });

  const toggleSwitchKnobClass = classNames(toggleSwitchKnob, {
    [toggleSwitchKnobOn]: active,
  });
  return (<span style={{ marginLeft: 'auto' }} >
    <Button noStyle onClick={handleClick} >
      <span className={periodToggle} >
        <Text weight="bold" size="extra-small">Previous Period</Text>
        <span style={{ marginLeft: 'auto' }} className={toggle}>
          <span className={toggleSwitchClass} />
          <span className={toggleSwitchKnobClass} />
        </span>
      </span>
    </Button>
  </span>);
};

PeriodToggle.defaultProps = {
  active: false,
};

PeriodToggle.propTypes = {
  active: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export default PeriodToggle;

