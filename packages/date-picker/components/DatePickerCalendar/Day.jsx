import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import Button from '@bufferapp/components/Button';

import styles from './date-picker-calendar.less';

const Day = (props) => {
  const {
    timestamp,
    day,
    inMonth,
    today,
    selectedBetween,
    selectedStart,
    selectedEnd,
    isDisabled,
    startDate,
    endDate,
    disabledText,
    handleClick,
  } = props;

  const m = moment.unix(timestamp);
  const isEndOfWeek = m.day() === 0;
  const isStartOfWeek = m.day() === 1;

  const isSelected = selectedStart || selectedEnd || selectedBetween;

  const showStartConnector = (selectedStart || selectedBetween) &&
                            (endDate !== null && startDate !== null) &&
                            (startDate !== endDate);

  const showEndConnector = (selectedEnd || selectedBetween) &&
                            (startDate !== null) &&
                            (endDate !== startDate);

  const showRoundEndConnector = isEndOfWeek && selectedBetween;
  const showRoundStartConnector = isStartOfWeek && selectedBetween;

  const dayClass = classNames(styles.day, {
    [styles.inactiveDay]: !inMonth || isDisabled,
  });

  const markerClass = classNames(styles.marker, {
    [styles.hoverMarker]: !isDisabled,
    [styles.todayMarker]: today,
    [styles.selectedMarker]: isSelected,
    [styles.startMarker]: showStartConnector,
    [styles.endMarker]: showEndConnector,
  });

  const startMarkerConnectorClass = classNames(styles.markerConnector, {
    [styles.markerConectorActive]: showEndConnector || showRoundStartConnector,
    [styles.roundStartMarker]: showRoundStartConnector,
  });

  const endMarkerConnectorClass = classNames(styles.markerConnector, {
    [styles.markerConectorActive]: showStartConnector || showRoundEndConnector,
    [styles.roundEndMarker]: showRoundEndConnector,
  });

  return (
    <div className={dayClass} data-tip={disabledText}>
      <span className={startMarkerConnectorClass} />
      <Button noStyle onClick={() => (isDisabled ? null : handleClick(timestamp))}>
        <span className={markerClass}>{day}</span>
      </Button>
      <span className={endMarkerConnectorClass} />
    </div>
  );
};

Day.defaultProps = {
  startDate: null,
  endDate: null,
};

Day.propTypes = {
  day: PropTypes.number.isRequired,
  today: PropTypes.bool.isRequired,
  inMonth: PropTypes.bool.isRequired,
  selectedBetween: PropTypes.bool.isRequired,
  selectedEnd: PropTypes.bool.isRequired,
  selectedStart: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  disabledText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  timestamp: PropTypes.number.isRequired,
};

export default Day;
