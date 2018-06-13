import { connect } from 'react-redux';
import { actions } from './reducer';
import HourlyChart from './components/HourlyChart';

const findSelectedMetric = (metrics, selectedMetric) =>
  metrics.find(metric => metric.label === selectedMetric);

export default connect(
  state => ({
    ...state.hourly,
    selectedMetric: findSelectedMetric(state.hourly.metrics, state.hourly.selectedMetric),
    profileService: state.profiles.selectedProfileService,
  }),
  dispatch => ({
    toggleDropdown: () => dispatch(actions.toggleDropdown()),
    selectMetric: metric => dispatch(actions.selectMetric(metric)),
  }),
)(HourlyChart);


export { ChartContent, Title } from './components/HourlyChart';
// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
