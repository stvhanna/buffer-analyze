import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';
import Button from '@bufferapp/analyze-shared-components/Button';

const Card = styled.section`
  width: 660px;
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
  font-size: 0.75rem !important;
  font-weight: 400;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
`;

const Modal = ({ open, addReport, translations }) => {
  if (!open) return null;
  let textInput;
  const onClick = () => {
    addReport(textInput.value);
  };
  return (
    <Card>
      <Text color="sidebarBackgroundBlue" weight="medium">{translations.addReportTitle}</Text>
      <Section>
        <Input
          placeholder={translations.addReportPlaceholder}
          innerRef={(input) => { textInput = input; }}
        />
        <Button onClick={onClick}>
          <Text color="sidebarBackgroundBlue" size="small" weight="medium">{translations.createReport}</Text>
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
  translations: PropTypes.shape({
    addReportTitle: PropTypes.string,
    createReport: PropTypes.string,
    addReportPlaceholder: PropTypes.string,
  }).isRequired,
};

export default Modal;
