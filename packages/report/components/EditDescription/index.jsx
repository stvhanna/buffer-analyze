import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fontFamily } from '@bufferapp/components/style/font';
import styled from 'styled-components';

const Form = styled.form`
  margin-top: 20px;
  padding: 0;
`;

const Input = styled.input`
  color: #505050;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: ${fontFamily};
  margin: 0 0 .5rem;
  border: none;
  padding: 0;
  display: block;
  width: 100%;
`;

class EditDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.description,
    };
  }

  handleBlur = () => {
    this.props.saveDescription(this.state.description);
  }

  handleSubmit = () => {
    this.props.saveDescription(this.state.description);
  }

  handleChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          innerRef={(input) => { this.input = input; }}
          value={this.state.description}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          autoFocus
        />
      </Form>
    );
  }
}

EditDescription.propTypes = {
  description: PropTypes.string.isRequired,
  saveDescription: PropTypes.func.isRequired,
};

export default EditDescription;
