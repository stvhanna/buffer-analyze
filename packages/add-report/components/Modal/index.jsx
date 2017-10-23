import React, { Component } from 'react';
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
  font-size: 1rem;
  padding: 1rem;
  font-family: 'Open Sans', sans-serif;
  transition: background-color 250ms ease-in-out;
  background-color: ${({ showValidationStyle }) => showValidationStyle ? 'aliceblue' : 'white' };

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    transition: color 250ms ease-in-out;
    color: ${({ showValidationStyle }) => showValidationStyle ? '#168eea' : '#59626a' };
  }
  ::-moz-placeholder { /* Firefox 19+ */
    transition: color 250ms ease-in-out;
    color: ${({ showValidationStyle }) => showValidationStyle ? '#168eea' : '#59626a' };
  }
  :-ms-input-placeholder { /* IE 10+ */
    transition: color 250ms ease-in-out;
    color: ${({ showValidationStyle }) => showValidationStyle ? '#168eea' : '#59626a' };
  }
  :-moz-placeholder { /* Firefox 18- */
    transition: color 250ms ease-in-out;
    color: ${({ showValidationStyle }) => showValidationStyle ? '#168eea' : '#59626a' };
  }
`;

let textInput;

class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showValidationStyle: false
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    if (this.state.showValidationStyle) {
      this.setState({
        showValidationStyle: false
      });
    }
  }

  onClick() {
    let isValid = this.textInput.value.length > 0;

    this.setState({
      showValidationStyle: !isValid
    });

    if (isValid) {
      this.props.addReport(this.textInput.value);
    }
  }

  render() {
    if (!open) return null;
    const { translations } = this.props;
    return (
      <Card>
        <Text color="sidebarBackgroundBlue" size="large">{translations.addReportTitle}</Text>
        <Section>
          <Input
            placeholder={translations.addReportPlaceholder}
            innerRef={(input) => { this.textInput = input; }}
            onChange={this.onChange}
            showValidationStyle={this.state.showValidationStyle}
          />
          <Button onClick={this.onClick}>
            <Text color="sidebarBackgroundBlue">{translations.createReport}</Text>
          </Button>
        </Section>
      </Card>
    );
  }
}

Modal.defaultProps = {
  open: false,
  addReport: () => {}
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
