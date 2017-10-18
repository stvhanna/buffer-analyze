import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';

import { Button } from '@bufferapp/analyze-shared-components';

import Modal from '../Modal';

const Wrapper = styled.section`
  display: inline-block;
  position: relative;
`;

const AddReport = ({ toggleMenu, open, addReport }) =>
  <Wrapper>
    <Button onClick={toggleMenu}>
      <Text color="sidebarBackgroundBlue">Add to Report</Text>
    </Button>
    <Modal open={open} addReport={addReport} />
  </Wrapper>;

AddReport.defaultProps = {
  addReport: () => {},
  open: false,
};

AddReport.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  addReport: PropTypes.func,
  open: PropTypes.bool,
};

export default AddReport;
