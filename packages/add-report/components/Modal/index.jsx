import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';
import Button from '@bufferapp/analyze-shared-components/Button';

const Card = styled.section`
  width: 640px;
  background: #FFFFFF;
  border: 1px solid #E2E8ED;
  box-shadow: 0px 0px 10px rgba(48, 71, 89, 0.05);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 2.25rem;
  position: absolute;
  top: 0;
  right: 9.5rem;
  z-index: 1;
`;


const Section = styled.section`
  margin: 1.25rem 0 2.25rem;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input.attrs({
  placeholder: 'Please enter title here',
  type: 'text',
})`
  border: 1px solid #D5E3EF;
  border-radius: 3px;
  box-sizing: border-box;
  width: 445px;
  outline: none;
  font-size: 1rem;
  padding: 1rem;
  font-family: 'Open Sans', sans-serif;
`;

const Modal = ({ open, addReport }) => {
  if (!open) return null;
  let textInput;
  const onClick = () => {
    addReport(textInput.value);
  };
  return (
    <Card>
      <Text color="sidebarBackgroundBlue" size="large">Add to a new report</Text>
      <Section>
        <Input innerRef={(input) => { textInput = input; }} />
        <Button onClick={onClick}>
          <Text color="sidebarBackgroundBlue">Create Report</Text>
        </Button>
      </Section>
    </Card>
  );
};

Modal.defaultProps = {
  open: false,
  addReport: () => {},
};

Modal.propTypes = {
  open: PropTypes.bool,
  addReport: PropTypes.func,
};

export default Modal;
