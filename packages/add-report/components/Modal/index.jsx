import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Divider from '@bufferapp/components/Divider';
import Text from '@bufferapp/components/Text';
import Button from '@bufferapp/analyze-shared-components/Button';
import Modal from '@bufferapp/analyze-shared-components/Modal';

import { ReportList } from '@bufferapp/report-list';

const Content = styled.section`
  padding: 0 .75rem;
`;

const Section = styled.section`
  margin-top: 1rem;
  max-height: 18rem;
  overflow-y: scroll;
  background: #FAFAFA;
  border-radius: 3px 3px 0 0;
  min-height: 12rem;
  padding: 0.75rem 0.5rem;
  box-shadow: 0 1px 1px rgba(0,0,0,0.05) inset;
`;

const InputWrapper = styled.section`
  margin-top: 1rem;
  margin-bottom: 2rem;
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
  width: 466px;
  outline: none;
  font-size: 0.8rem !important;
  font-weight: 400;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
`;

const AddReportModal = ({ open, addReport, toggle, selectReport, translations, reports }) => {
  let textInput;
  const onClick = () => {
    addReport(textInput.value);
  };
  return (
    <Modal open={open} toggle={toggle}>
      <Content>
        <Text color="sidebarBackgroundBlue" weight="medium">{translations.addReportTitle}</Text>
        <InputWrapper>
          <Input
            placeholder={translations.addReportPlaceholder}
            innerRef={(input) => { textInput = input; }}
          />
          <Button onClick={onClick}>
            <Text color="sidebarBackgroundBlue" size="small" weight="medium">{translations.createReport}</Text>
          </Button>
        </InputWrapper>
        <div>
          <Text color="sidebarBackgroundBlue" weight="medium">Or, add to an existing report</Text>
        </div>
        <Section>
          <ReportList
            reports={reports}
            selectReport={selectReport}
            small
          />
        </Section>
      </Content>
      <Divider marginTop="0" />
    </Modal>
  );
};

AddReportModal.defaultProps = {
  open: false,
  addReport: () => {},
  selectReport: () => {},
  toggle: () => {},
  reports: [],
};

AddReportModal.propTypes = {
  open: PropTypes.bool,
  addReport: PropTypes.func,
  selectReport: PropTypes.func,
  translations: PropTypes.shape({
    addReportTitle: PropTypes.string,
    createReport: PropTypes.string,
    addReportPlaceholder: PropTypes.string,
  }).isRequired,
  toggle: PropTypes.func,
  reports: PropTypes.arrayOf(PropTypes.shape({
    updated_at: PropTypes.string,
    name: PropTypes.string,
  })),
};

export default AddReportModal;
