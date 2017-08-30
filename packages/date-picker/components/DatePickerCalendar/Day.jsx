import React, {
  Component,
  PropTypes
} from 'react';

import moment     from 'moment';
import classNames from 'classnames';
import styles from './date-picker-calendar.less';

class DatePickerCalendarDay extends Component {
  static propTypes = {
    day: PropTypes.number.isRequired,
    today: PropTypes.bool.isRequired,
    inMonth: PropTypes.bool.isRequired,
    selectedBetween: PropTypes.bool,
    selectedEnd: PropTypes.bool,
    selectedStart: PropTypes.bool,
    isDisabled: PropTypes.bool,
    disabledText: PropTypes.string,

    handleClick: PropTypes.func,
  }

  handleClick (day) {
    if (!this.props.isDisabled) {
      this.props.handleClick(this.props);
    }
  }

  render () {
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
      disabledText
    } = this.props;

    let m = moment.unix(timestamp);
    let isEndOfWeek   = m.day() === 0;
    let isStartOfWeek = m.day() === 1;

    let isSelected = selectedStart || selectedEnd || selectedBetween;

    let showStartConnector = (selectedStart || selectedBetween)   &&
                             (endDate !== -1 && startDate !== -1) &&
                             (startDate !== endDate);

    let showEndConnector   = (selectedEnd || selectedBetween) &&
                             (startDate !== -1)               &&
                             (endDate !== startDate);

    let showRoundEndConnector = isEndOfWeek && selectedBetween;
    let showRoundStartConnector = isStartOfWeek && selectedBetween;

    let dayClass = classNames(styles.day, {
      [styles.inactiveDay]: !inMonth || isDisabled
    });

    let markerClass = classNames(styles.marker, {
      [styles.hoverMarker]: !isDisabled,
      [styles.todayMarker]: today,
      [styles.selectedMarker]: isSelected,
      [styles.startMarker]: showStartConnector,
      [styles.endMarker]: showEndConnector
    });

    let startMarkerConnectorClass = classNames(styles.markerConnector, {
      [styles.markerConectorActive]: showEndConnector || showRoundStartConnector,
      [styles.roundStartMarker]: showRoundStartConnector
    });

    let endMarkerConnectorClass = classNames(styles.markerConnector, {
      [styles.markerConectorActive]: showStartConnector || showRoundEndConnector,
      [styles.roundEndMarker]: showRoundEndConnector
    });

    return (
      <div className={dayClass} onClick={this.handleClick.bind(this)} data-tip={disabledText}>
        <span className={startMarkerConnectorClass}></span>
        <span className={markerClass}>{day}</span>
        <span className={endMarkerConnectorClass}></span>
      </div>
    );
  }
}

export default DatePickerCalendarDay;
