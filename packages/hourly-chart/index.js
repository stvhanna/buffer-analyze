import { connect } from 'react-redux';
import { actions } from './reducer';
import HourlyChart from './components/HourlyChart';

const findSelectedMetric = (metrics, selectedMetric) =>
  metrics.find(metric => metric.label === selectedMetric);

export default connect(
  state => ({
    ...state.hourly,
    selectedMetric: findSelectedMetric(state.hourly.metrics, state.hourly.selectedMetric),
    secondaryMetric: findSelectedMetric(state.hourly.metrics, state.hourly.selectedSecondaryMetric),
  }),
  dispatch => ({
    toggleDropdown: () => dispatch(actions.toggleDropdown()),
    toggleSecondaryDropdown: () => dispatch(actions.toggleSecondaryDropdown()),
    showSecondaryDropdown: () => dispatch(actions.showSecondaryDropdown()),
    hideSecondaryDropdown: () => dispatch(actions.hideSecondaryDropdown()),
    selectMetric: (metric, secondary) => (secondary ?
      dispatch(actions.selectSecondaryMetric(metric)) :
      dispatch(actions.selectMetric(metric))
    ),
  }),
)(HourlyChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
