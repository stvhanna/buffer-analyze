import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
} from '@bufferapp/components';

import moment from 'moment';
import styled from 'styled-components';

const ReportListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.25rem;
  background: #FFFFFF;
  border: 1px solid #D5E3EF;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  margin-bottom: .5rem;
`;

const Name = styled.span`
  color: #343E47;
`;

const Date = styled.span`
  color: #c1c1c1;
`;

const Report = ({ updated_at, name }) =>
  <ReportListItem>
    <Text size="large" weight="bold"><Name>{name}</Name></Text>
    <Text><Date>{moment(updated_at, 'x').format('MMMM D, YYYY')}</Date></Text>
  </ReportListItem>;

Report.propTypes = {
  updated_at: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Report;
