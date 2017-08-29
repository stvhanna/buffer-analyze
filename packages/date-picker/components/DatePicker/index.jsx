import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';
import moment from 'moment';

import styles from './date-picker.less';

import DatePickerButton from '../DatePickerButton/DatePickerButton';
import DatePickerDropdown from '../DatePickerDropdown/DatePickerDropdown';
import DatePickerForm from '../DatePickerForm/DatePickerForm';

// Containers
// import DatePickerFormContainer from '../../containers/DatePickerForm/DatePickerFormContainer';

function formatDate(date, dateFormat = 'MM/DD/YY') {
  return moment.unix(date).format(dateFormat);
}

const PRESETS = [
  {
    name: '90 Days',
    label: 'Past 90 Days',
    range: 90
  },
  {
    name: '30 Days',
    label: 'Past 30 Days',
    range: 30
  },
  {
    name: '28 Days',
    label: 'Past 28 Days',
    range: 28
  },
  {
    name: '7 Days',
    label: 'Past 7 Days',
    range: 7
  },
  {
    name: 'Yesterday',
    label: 'Yesterday',
    range: 0
  },
  {
    name: 'Custom',
    label: 'Custom',
    range: Infinity
  },
];

const isRangeSelected = (range, start, end) => {
  const rangeEnd = moment().subtract(1, 'day').format('MM/DD/YYYY');
  const rangeStart = moment().subtract(range + 1, 'days').format('MM/DD/YYYY');

  const rangesMatch = (
    rangeStart === moment.unix(start).format('MM/DD/YYYY') &&
    rangeEnd === moment.unix(end).format('MM/DD/YYYY')
  );

  return (rangesMatch || range === Infinity);
};

function getButtonTitle(props) {
  const {
    loading,
    options,
    customStartDate,
    customEndDate,
    startDate,
    endDate
  } = props;

  let title;

  if (loading) {
    title = 'Loading...';
  } else if (customStartDate !== -1 && customEndDate !== -1) {
    const from = customStartDate !== -1 ? formatDate(customStartDate) : '';
    const to = customEndDate !== -1 ? formatDate(customEndDate) : '';
    title = `From: ${from} - To: ${to}`;
  } else {
    const selectedRange = PRESETS.find(preset => isRangeSelected(preset.range, startDate, endDate));
    if (selectedRange.label === 'Custom' && startDate && endDate) {
      const from = formatDate(startDate);
      const to = formatDate(endDate);
      title = `From: ${from} - To: ${to}`;
    } else {
      title = selectedRange.label;
    }
  }
  return title;
  // const {
  //   loading,
  //   startDate,
  //   endDate,
  //   selectedPreset,
  //   presetOptions,
  // } = props;
  // let selectedRange = presetOptions[selectedPreset].range;

  // let buttonTitle = 'Pick a Date';
  // if (loading) {
  //   buttonTitle = 'Loading...';
  // } else if (selectedPreset !== -1 && selectedRange !== Infinity) {
  //   let range = presetOptions[selectedPreset].range;
  //   if (range === 0) {
  //     buttonTitle = 'Today';
  //   } else if (range === -1) {
  //     buttonTitle = 'Yesterday';
  //   } else {
  //     buttonTitle = `Past ${Math.abs(range)} Days`;
  //   }
  // } else if (startDate !== -1 || endDate !== -1 ) {
  //   const fromDate = startDate !== -1 ? formatDate(startDate) : '' ;
  //   const toDate   = endDate   !== -1 ? formatDate(endDate) : '' ;
  //   buttonTitle = `From: ${fromDate} - To: ${toDate}`;
  // } else {
  //   buttonTitle = 'Custom';
  // }
  // return buttonTitle;
}

function getButtonSubtitle(props) {
  const {
    startDate,
    endDate,
  } = props;

  if (startDate !== -1 && endDate !== -1) {
    const fromDate = formatDate(startDate)
    const toDate = formatDate(endDate)

    // No need to show the data for yesterday
    if(fromDate === toDate){
      return ''
    }

    return `${fromDate} to ${toDate}`;
  }

  return ''
}

function getButtonTitles(props) {
    const buttonTitle = getButtonTitle(props);
    let buttonSubtitle = getButtonSubtitle(props);

    // hide subtitle if the title is showing the date (custom range)
    if (buttonTitle.match(/^From/)) {
      buttonSubtitle = ''
    }

    return {buttonTitle, buttonSubtitle}
}

const DatePicker = (props) => {
  const {
    isOpen,
    loading,
    options,
    // Actions
    open,
    close,
  } = props;

  const clickCatcherClass = classNames(styles.clickCatcher ,{
    [styles.clickCatcherActive]: isOpen
  });

  let {buttonTitle, buttonSubtitle} = getButtonTitles(props)
  const disabledPresets = options.filter(preset => preset.disabled);

  return (
    <div>
      <DatePickerButton
        isOpen={isOpen}
        loading={loading}
        title={buttonTitle}
        subtitle={buttonSubtitle}
        disabledPresets={disabledPresets}
        handleClick={() => (isOpen ? props.close() : props.open())}
      />

      <DatePickerDropdown isOpen={isOpen}>
        <DatePickerForm {...props} disabledPresets={disabledPresets} />
        { /* <DatePickerFormContainer /> */ }
      </DatePickerDropdown>

      <div onClick={close} className={clickCatcherClass} />
    </div>
  );
};

DatePicker.defaultProps = {
  customStartDate: -1,
  customEndDate: -1,
  customMonth: moment().startOf('month').unix(),
  options: [],
};

DatePicker.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  minDate: PropTypes.number,
  maxDate: PropTypes.number,
  disabledPresets: PropTypes.array.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
  })),

  // Actions
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default DatePicker;
