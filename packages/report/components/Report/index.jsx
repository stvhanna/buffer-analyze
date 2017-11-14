import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Button,
} from '@bufferapp/components';
import styled from 'styled-components';
import ChartFactory from '../ChartFactory';
import DateRange from '../DateRange';
import EditTitle from '../EditTitle';

const Card = styled.section`
  width: 880px;
  background: #FFFFFF;
  border: 1px solid #E2E8ED;
  box-shadow: 0px 0px 10px rgba(48, 71, 89, 0.05);
  border-radius: 5px;
  padding: 4.5rem 4rem;
`;

const Title = styled.h1`
  color: #343E47;
  font-size: 26px;
  font-weight: bold;
  margin: 0 0 .5rem;
`;

const Report = ({ name, dateRange, charts, loading, edit, saveChanges, editName }) => {
  if (loading) return '...loading';
  return (
    <Card>
      <Text>
        { edit && <EditTitle name={name} saveChanges={saveChanges} />}
        { !edit && <div><Button noStyle onClick={editName}><Title>{name}</Title></Button></div> }
        <DateRange {...dateRange} />
      </Text>
      <ChartFactory charts={charts} />
    </Card>
  );
};

Report.defaultProps = {
  loading: false,
  edit: false,
  dateRange: {},
  charts: [],
};

Report.propTypes = {
  loading: PropTypes.bool,
  edit: PropTypes.bool,
  dateRange: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  saveChanges: PropTypes.func.isRequired,
  charts: PropTypes.arrayOf(PropTypes.shape({
    chart_id: PropTypes.string,
  }).isRequired),
};

export default Report;
