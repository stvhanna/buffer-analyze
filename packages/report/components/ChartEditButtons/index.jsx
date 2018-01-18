import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from '@bufferapp/components';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  CloseIcon,
} from '@bufferapp/components/Icon/Icons';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 0;
`;

const Box = styled.span`
  border: 1px solid #D5E3EF;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin: 0 0 0 .25rem;
`;

const ChartEditButtons = ({ first, last, moveUp, moveDown, deleteChart, id }) => (
  <Wrapper>
    <Button disabled={first} noStyle onClick={() => moveUp(id)}>
      <Box>
        <ArrowUpIcon />
      </Box>
    </Button>
    <Button disabled={last} noStyle onClick={() => moveDown(id)}>
      <Box>
        <ArrowDownIcon />
      </Box>
    </Button>
    <Button noStyle onClick={() => deleteChart(id)}>
      <Box>
        <CloseIcon />
      </Box>
    </Button>
  </Wrapper>
);

ChartEditButtons.defaultProps = {
  first: false,
  last: false,
};

ChartEditButtons.propTypes = {
  id: PropTypes.string.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  deleteChart: PropTypes.func.isRequired,
  first: PropTypes.bool,
  last: PropTypes.bool,
};

export default ChartEditButtons;
