import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fontFamily } from '@bufferapp/components/style/font';
import styled from 'styled-components';

const EditTitleInput = styled.input`
  color: #343E47;
  font-size: 26px;
  font-weight: bold;
  font-family: ${fontFamily};
  margin: 0 0 .5rem;
  border: none;
  padding: 0;
  display: block;
  width: 100%;
`;

class EditTitle extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    saveChanges: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur() {
    this.props.saveChanges(this.state.name);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <EditTitleInput
        value={this.state.name}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

export default EditTitle;
