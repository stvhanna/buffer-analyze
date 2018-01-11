import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Button } from '@bufferapp/analyze-shared-components';
import CloseIcon from '@bufferapp/components/Icon/Icons/CloseIcon';

const DeleteButton = styled(Button)`
  &:before {
    width: 1px
    height: 1px;
    display: block;
    content: "";
  }
`;

const RemoveButton =
  ({ _id, removeReport }) =>
    <DeleteButton
      noStyle
      onClick={(event) => { event.stopPropagation(); removeReport(_id); }}
    >
      <CloseIcon color="torchRed" />
    </DeleteButton>;

RemoveButton.propTypes = {
  _id: PropTypes.string.isRequired,
  removeReport: PropTypes.func,
};

RemoveButton.defaultProps = {
  removeReport: null,
};

export default RemoveButton;
