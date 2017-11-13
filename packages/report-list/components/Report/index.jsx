import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Button,
} from '@bufferapp/components';

import moment from 'moment';
import styled from 'styled-components';

const ReportListItem = styled.li`
  display: block;
  background: #FFFFFF;
  border: 1px solid #D5E3EF;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  margin-bottom: .5rem;
`;

const ReportText = styled.span`
  display: flex;
  padding: ${props => (props.small ? '.75rem 1rem' : '1.5rem 1.25rem')};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.span`
  color: #343E47;
`;

const Date = styled.span`
  color: #c1c1c1;
`;

const Report = ({ _id, updated_at, name, selectReport, small }) =>
  <ReportListItem>
    <Button noStyle fillContainer onClick={() => selectReport(_id)}>
      <ReportText small={small}>
        <Text size={small ? 'small' : null} weight="bold"><Name>{name}</Name></Text>
        <Text><Date>{moment(updated_at, 'x').format('MMMM D, YYYY')}</Date></Text>
      </ReportText>
    </Button>
  </ReportListItem>;

Report.defaultProps = {
  small: false,
};

Report.propTypes = {
  _id: PropTypes.string.isRequired,
  updated_at: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selectReport: PropTypes.func.isRequired,
  small: PropTypes.bool,
};

export default Report;
