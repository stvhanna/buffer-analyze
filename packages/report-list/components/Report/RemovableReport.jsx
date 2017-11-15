import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import {
  Text,
} from '@bufferapp/components';
import CloseIcon from '@bufferapp/components/Icon/Icons/CloseIcon';
import {
  Button,
  VerticalDivider,
} from '@bufferapp/analyze-shared-components';

import Name from '../Name';
import Date from '../Date';
import ReportText from '../ReportText';

const ButtonContainer = styled.span`
  position: absolute;
  right: 1rem;
  display: flex;
`;


const DeleteButton = styled(Button)`
  &:before {
    width: 1px
    height: 1px;
    display: block;
    content: "";
  }
`;

const RemovableReport =
  ({ _id, updated_at, name, small, removeReport, selectReport, showButtons }) =>
    <ReportText small={small}>
      <Name name={name} small={small} />
      { !showButtons && <Date updated_at={updated_at} small={small} /> }
      { showButtons &&
        <ButtonContainer>
          <Button onClick={() => selectReport(_id)}>
            <Text>View report</Text>
          </Button>
          <VerticalDivider />
          <DeleteButton noStyle onClick={() => removeReport(_id)}>
            <CloseIcon color="torchRed" />
          </DeleteButton>
        </ButtonContainer> }
    </ReportText>;

RemovableReport.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
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
