import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fontFamily } from '@bufferapp/components/style/font';
import styled from 'styled-components';

const Form = styled.form`
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  color: #000000;
  font-size: 2rem;
  font-weight: bold;
  font-family: ${fontFamily};
  margin: 0 0 .5rem;
  border: none;
  padding: 0;
  display: block;
  width: 100%;
`;

class EditTitle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
    };
  }

  handleBlur = () => {
    this.props.saveChanges(this.state.name);
  }

  handleSubmit = () => {
    this.props.saveChanges(this.state.name);
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          innerRef={(input) => { this.input = input; }}
          value={this.state.name}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          autoFocus
        />
      </Form>
    );
  }
}

EditTitle.propTypes = {
  name: PropTypes.string.isRequired,
  saveChanges: PropTypes.func.isRequired,
};

export default EditTitle;
