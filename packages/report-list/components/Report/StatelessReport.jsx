import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import moment from 'moment';
import {
  Text,
} from '@bufferapp/components';
import CloseIcon from '@bufferapp/components/Icon/Icons/CloseIcon';
import {
  Button,
  VerticalDivider,
} from '@bufferapp/analyze-shared-components';


const ReportText = styled.span`
  display: flex;
  width: 100%;
  padding: ${props => (props.small ? '.75rem 1rem' : '1.5rem 1.25rem')};
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

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

const Name = styled.span`
  color: #343E47;
`;

const Date = styled.span`
  color: #c1c1c1;
`;


const StatelessReport =
  ({ _id, name, updated_at, showButtons, small, removeReport, selectReport }) =>
    <ReportText small={small}>
      <Text size={small ? 'small' : null} weight="bold"><Name>{name}</Name></Text>
      { !showButtons && <Text size={small ? 'small' : null}><Date>{moment(updated_at, 'x').format('MMMM D, YYYY')}</Date></Text>}
      { showButtons && <ButtonContainer>
        <Button onClick={() => selectReport(_id)}>
          <Text>View report</Text>
        </Button>
        <VerticalDivider />
        <DeleteButton noStyle onClick={() => removeReport(_id)}>
          <CloseIcon color="torchRed" />
        </DeleteButton>
      </ButtonContainer> }
    </ReportText>;

StatelessReport.propTypes = {
  _id: PropTypes.string.isRequired,
  updated_at: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selectReport: PropTypes.func.isRequired,
  removeReport: PropTypes.func,
  small: PropTypes.bool,
  showButtons: PropTypes.bool.isRequired,
};

StatelessReport.defaultProps = {
  small: false,
  removeReport: null,
};

export default StatelessReport;
