import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  ModeToggle,
  MetricsDropdown,
} from '@bufferapp/analyze-shared-components';

import PresetsDropdown from '../PresetsDropdown';

const CustomModeHeader = ({
  className,
  mode,
  selectMode,
  ...props
}) => (<div className={className}>
  <MetricsDropdown
    closeDropdown={props.closePrimaryMetricDropdown}
    isDropdownOpen={props.isPrimaryMetricDropdownOpen}
    metrics={props.metrics}
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
  <ModeToggle
    baseModeLabel="Presets" secondaryModeLabel="Custom"
    handleClick={selectMode}
    active
  />
</div>);

CustomModeHeader.propTypes = {
  className: PropTypes.string.isRequired,
  isPrimaryMetricDropdownOpen: PropTypes.bool.isRequired,
  isSecondaryMetricDropdownOpen: PropTypes.bool.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mode: PropTypes.number,
  })).isRequired,
  mode: PropTypes.number.isRequired,
  selectedMetrics: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mode: PropTypes.number,
  })).isRequired,

  // actions
  selectMode: PropTypes.func.isRequired,
  selectPrimaryMetric: PropTypes.func.isRequired,
  selectSecondaryMetric: PropTypes.func.isRequired,
  openPrimaryMetricDropdown: PropTypes.func.isRequired,
  openSecondaryMetricDropdown: PropTypes.func.isRequired,
  closePrimaryMetricDropdown: PropTypes.func.isRequired,
  closeSecondaryMetricDropdown: PropTypes.func.isRequired,
};

const PresetsModeHeader = ({
  className,
  mode,
  selectMode,
  togglePresetDropdown,
  ...props
}) => (<div className={className}>
  <PresetsDropdown toggleDropdown={togglePresetDropdown} {...props} />
  <ModeToggle
    baseModeLabel="Presets" secondaryModeLabel="Custom"
    handleClick={selectMode}
  />
</div>);

PresetsModeHeader.propTypes = {
  className: PropTypes.string.isRequired,
  mode: PropTypes.number.isRequired,
  selectedPreset: PropTypes.number.isRequired,

  // actions
  selectMode: PropTypes.func.isRequired,
  selectPreset: PropTypes.func.isRequired,
  togglePresetDropdown: PropTypes.func.isRequired,
};

const Header = ({
  mode,
  ...props
}) => (<div>
  {mode === 0 && <PresetsModeHeader mode={mode} {...props} />}
  {mode === 1 && <CustomModeHeader mode={mode} {...props} />}
</div>);

Header.propTypes = {
  mode: PropTypes.number.isRequired,
};

const HeaderStyled = styled(Header)`
  display: flex;
`;

export default HeaderStyled;
