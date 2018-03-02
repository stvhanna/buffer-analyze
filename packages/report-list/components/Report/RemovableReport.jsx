import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Button } from '@bufferapp/components';

import Name from '../Name';
import Date from '../Date';
import ReportText from '../ReportText';
import RemoveButton from '../RemoveButton';

const ButtonContainer = styled.span`
  position: absolute;
  right: 1rem;
  display: flex;
`;

const RemovableReport =
  ({ _id, updated_at, name, small, date_range, removeReport, selectReport, showButtons }) =>
    <Button noStyle fillContainer onClick={() => selectReport(_id)}>
      <ReportText small={small}>
        <Name name={name} small={small} />
        { !showButtons && <Date updated_at={updated_at} date_range={date_range} small={small} /> }
        { showButtons &&
          <ButtonContainer>
            <RemoveButton _id={_id} removeReport={removeReport} />
          </ButtonContainer> }
      </ReportText>
    </Button>;

RemovableReport.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updated_at: PropTypes.number.isRequired,
  selectReport: PropTypes.func.isRequired,
  removeReport: PropTypes.func,
  small: PropTypes.bool,
  showButtons: PropTypes.bool,
};

RemovableReport.defaultProps = {
  small: false,
  removeReport: null,
  showButtons: false,
};

export default RemovableReport;
