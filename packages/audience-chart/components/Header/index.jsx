import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  MetricsDropdown,
} from '@bufferapp/analyze-shared-components';

const Header = ({
  className,
  mode,
  ...props
}) => (<div className={className}>
  <MetricsDropdown
    closeDropdown={props.closePrimaryMetricDropdown}
    isDropdownOpen={props.isPrimaryMetricDropdownOpen}
    metrics={props.metrics.filter(m => m.label !== props.selectedMetrics[1].label)}
    openDropdown={props.openPrimaryMetricDropdown}
    selectMetric={props.selectPrimaryMetric}
    selectedMetricLabel={props.selectedMetrics[0].label}
  />
  <MetricsDropdown
    closeDropdown={props.closeSecondaryMetricDropdown}
    isDropdownOpen={props.isSecondaryMetricDropdownOpen}
    metrics={props.metrics.filter(m => m.label !== props.selectedMetrics[0].label)}
    openDropdown={props.openSecondaryMetricDropdown}
    selectMetric={props.selectSecondaryMetric}
    selectedMetricLabel={props.selectedMetrics[1].label}
    secondary
  />
</div>);

Header.propTypes = {
  className: PropTypes.string.isRequired,
  isPrimaryMetricDropdownOpen: PropTypes.bool.isRequired,
  isSecondaryMetricDropdownOpen: PropTypes.bool.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    mode: PropTypes.number,
  })).isRequired,
  mode: PropTypes.number.isRequired,
  selectedMetrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    mode: PropTypes.number,
  })).isRequired,

  // actions
  selectPrimaryMetric: PropTypes.func.isRequired,
  selectSecondaryMetric: PropTypes.func.isRequired,
  openPrimaryMetricDropdown: PropTypes.func.isRequired,
  openSecondaryMetricDropdown: PropTypes.func.isRequired,
  closePrimaryMetricDropdown: PropTypes.func.isRequired,
  closeSecondaryMetricDropdown: PropTypes.func.isRequired,
};

const HeaderStyled = styled(Header)`
  display: flex;
`;

export default HeaderStyled;
