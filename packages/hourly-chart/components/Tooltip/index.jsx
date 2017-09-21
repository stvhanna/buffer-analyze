import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import numeral from 'numeral';

import ColorIcon from '../Dropdown/ColorIcon';

const header = {
  fontSize: '8pt',
  color: '#cfcfcf',
};

const Header = ({ hour, totalUpdates }) => {
  const formattedHour = moment(hour).format('h A');
  const formattedNextHour = moment(hour).add(1, 'hour').format('h A');
  const formattedTotalUpdates = numeral(totalUpdates).format('0,0');
  let headerCopy;
  switch (totalUpdates) {
    case 0:
      headerCopy = (<span>There were no updates</span>);
      break;
    case 1:
      headerCopy = (<span>There was <b>1</b> update</span>);
      break;
    default:
      headerCopy = (<span>There were a total of <b>{formattedTotalUpdates}</b> updates</span>);
      break;
  }
  return (
    <div>
      <span style={header}>{formattedHour} - {formattedNextHour}</span>
      <br />
      <br />
      { /* eslint-disable */ }
      {headerCopy} published between <b>{formattedHour}</b> and <b>{formattedNextHour}</b> and you earned: 
      { /* eslint-enable */ }
      <br />
      <br />
    </div>
  );
};

Header.propTypes = {
  hour: PropTypes.number.isRequired,
  totalUpdates: PropTypes.number.isRequired,
};

const Summary = ({ item, circle }) => (
  <span>
    <ColorIcon circle={circle} color={item.point.color} />
    <b>{numeral(item.y).format('0,0')} {item.series.name}</b>
    <br />
  </span>
);

Summary.propTypes = {
  item: PropTypes.shape({
    point: {
      color: PropTypes.string,
    },
    series: {
      name: PropTypes.string,
    },
  }).isRequired,
  circle: PropTypes.bool.isRequired,
};

const Tooltip = ({ points }) => (
  <div>
    <Header hour={points[0].key} totalUpdates={points[0].point.totalUpdates} />
    {points.reverse().map((point, index) =>
      <Summary item={point} circle={points.length === 2 && index === 0} />) }
  </div>
);

Tooltip.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    point: PropTypes.shape({
      color: PropTypes.string,
    }),
    series: PropTypes.shape({
      name: PropTypes.string,
    }),
  })).isRequired,
};

export default Tooltip;
