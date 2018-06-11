import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Button,
} from '@bufferapp/components';
import {
  PlusIcon,
  CloseIcon,
} from '@bufferapp/components/Icon/Icons';
import Dropdown from '../Dropdown';
import TimezoneInfo from '../TimezoneInfo';

const Header = styled.section`
  display: flex;
  align-items: center;
  padding: 0 0.75rem 1rem;
`;

const ToggleWrapper = styled.span`
  margin: 0 0 0 0.75rem;
`;

const OpenButton = styled.span`
  display: inline-block;
  padding: 7px 11px;
  border: 1px solid #ced7df;
  border-radius: 3px;
  cursor: pointer;
`;

const SecondaryMetricToggle = (props) => {
  if (props.metric) {
    return (<ToggleWrapper>
      <Dropdown
        secondary
        selectMetric={props.selectMetric}
        open={props.secondaryDropdownOpen}
        toggleDropdown={props.toggleSecondaryDropdown}
        metrics={props.metrics}
        selectedMetric={props.metric}
      />
      <ToggleWrapper>
        <Button
          onClick={props.hideSecondaryDropdown}
          noStyle
        >
          <CloseIcon size="small" />
        </Button>
      </ToggleWrapper>
    </ToggleWrapper>);
  }
  return (<ToggleWrapper>
    <Button onClick={props.showSecondaryDropdown} noStyle>
      <OpenButton><PlusIcon size="small" /></OpenButton>
    </Button>
  </ToggleWrapper>);
};

SecondaryMetricToggle.defaultProps = {
  metric: null,
};

SecondaryMetricToggle.propTypes = {
  showSecondaryDropdown: PropTypes.func.isRequired,
  toggleSecondaryDropdown: PropTypes.func.isRequired,
  hideSecondaryDropdown: PropTypes.func.isRequired,
  secondaryDropdownOpen: PropTypes.bool.isRequired,
  selectMetric: PropTypes.func.isRequired,
  metric: PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
};

const ChartHeader = (props) => {
  const metrics = props.metrics.filter(metric => (
    metric.label !== props.selectedMetric.label &&
      (!props.secondaryMetric || metric.label !== props.secondaryMetric.label)
  ));
  return (
    <Header>
      <Dropdown
        metrics={metrics}
        selectMetric={props.selectMetric}
        open={props.dropdownOpen}
        toggleDropdown={props.toggleDropdown}
        selectedMetric={props.selectedMetric}
      />
      <SecondaryMetricToggle
        metric={props.secondaryMetric}
        metrics={metrics}
        secondaryDropdownOpen={props.secondaryDropdownOpen}
        toggleSecondaryDropdown={props.toggleSecondaryDropdown}
        showSecondaryDropdown={props.showSecondaryDropdown}
        hideSecondaryDropdown={props.hideSecondaryDropdown}
        selectMetric={props.selectMetric}
      />
      <TimezoneInfo timezone={props.timezone} />
    </Header>
  );
};

ChartHeader.defaultProps = {
  secondaryMetric: null,
};

ChartHeader.propTypes = {
  selectedMetric: PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  secondaryMetric: PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  timezone: PropTypes.string.isRequired,
  showSecondaryDropdown: PropTypes.func.isRequired,
  toggleSecondaryDropdown: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  hideSecondaryDropdown: PropTypes.func.isRequired,
  dropdownOpen: PropTypes.bool.isRequired,
  secondaryDropdownOpen: PropTypes.bool.isRequired,
  selectMetric: PropTypes.func.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
};

export default ChartHeader;
