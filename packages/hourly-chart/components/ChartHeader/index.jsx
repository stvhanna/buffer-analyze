import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropdown from '../Dropdown';
import TimezoneInfo from '../TimezoneInfo';

const Header = styled.section`
  display: flex;
  align-items: center;
  padding: 0 0.75rem 1rem;
`;

const ChartHeader = props => (
  <Header>
    <Dropdown
      metrics={props.metrics}
      selectMetric={props.selectMetric}
      open={props.dropdownOpen}
      toggleDropdown={props.toggleDropdown}
      selectedMetric={props.selectedMetric}
    />
    <TimezoneInfo timezone={props.timezone} />
  </Header>
);

ChartHeader.propTypes = {
  selectedMetric: PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  timezone: PropTypes.string.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  dropdownOpen: PropTypes.bool.isRequired,
  selectMetric: PropTypes.func.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
};

export default ChartHeader;
