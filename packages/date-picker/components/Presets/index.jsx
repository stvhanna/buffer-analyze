import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';
import Button from '@bufferapp/components/Button';

import styles from '../DatePickerForm/date-picker-form.less';

const PRESETS = [
  {
    name: '90 Days',
    range: 90,
  },
  {
    name: '30 Days',
    range: 30,
  },
  {
    name: '28 Days',
    range: 28,
  },
  {
    name: '7 Days',
    range: 7,
  },
  {
    name: 'Yesterday',
    range: 1,
  },
  {
    name: 'Custom',
    range: Infinity,
  },
];

const isRangeSelected = (range, start, end) => {
  const rangeEnd = moment().subtract(1, 'day').format('MM/DD/YYYY');
  const rangeStart = moment().subtract(range, 'days').format('MM/DD/YYYY');

  const rangesMatch = (
    rangeStart === moment.unix(start).format('MM/DD/YYYY') &&
    rangeEnd === moment.unix(end).format('MM/DD/YYYY')
  );

  return (rangesMatch || range === Infinity);
};

const Presets = ({ selectPreset, minStartDate, startDate, endDate }) => {
  const presets = PRESETS.map((preset) => {
    const disabled = minStartDate > moment().subtract(preset.range, 'days');
    const selectedRange = PRESETS.find(({ range }) => isRangeSelected(range, startDate, endDate));
    const selected = selectedRange.range === preset.range;

    const itemClass = classNames(styles.headerListItem, {
      [styles.headerListItemActive]: selected,
      [styles.headerListItemInactive]: !selected,
      [styles.headerListItemDisabled]: disabled,
    });

    const dataTip = disabled ? 'We don\'t have complete data for this range.' : null;
    const handleClick = disabled ? null : (() => selectPreset(preset.range));
    return (
      <li
        key={preset.name.toLowerCase().replace(' ', '-')}
        data-tip={dataTip}
        className={itemClass}
      >
        <Button noStyle onClick={handleClick}>{preset.name}</Button>
      </li>
    );
  });

  return (
    <header className={styles.header}>
      <ul className={styles.headerList}>
        {presets.slice(0, 3)}
      </ul>
      <ul className={styles.headerList}>
        {presets.splice(3)}
      </ul>
    </header>
  );
};

Presets.defaultProps = {
  startDate: null,
  endDate: null,
};

Presets.propTypes = {
  selectPreset: PropTypes.func.isRequired,
  minStartDate: PropTypes.number.isRequired,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
};

export default Presets;
