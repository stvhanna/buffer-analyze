import { connect } from 'react-redux';
import SummaryTable from './components/SummaryTable';

export default connect(
  state => ({
    loading: state.summary.loading,
    metrics: state.summary.metrics,
    startDate: state.date.startDate,
    endDate: state.date.endDate,
  }),
)(SummaryTable);

export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';

export Title from './components/Title';
export GridItem from './components/GridItem';
export Loading from './components/Loading';
export NoData from './components/NoData';
