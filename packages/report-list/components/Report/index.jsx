import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatelessReport from './StatelessReport';

const ReportListItem = styled.li`
  display: flex;
  background: #FFFFFF;
  border: 1px solid #D5E3EF;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  margin-bottom: .5rem;
`;

class Report extends Component {
  static propTypes = {
    removeReport: PropTypes.func,
  };

  static defaultProps = {
    removeReport: null,
  };


  constructor(props) {
    super(props);
    this.addHover = this.addHover.bind(this);
    this.removeHover = this.removeHover.bind(this);
    this.state = {
      hovered: false,
    };
  }

  addHover() {
    this.setState({
      hovered: true,
    });
  }

  removeHover() {
    this.setState({
      hovered: false,
    });
  }

  render() {
    const showButtons = this.state.hovered && this.props.removeReport;
    return (
      <ReportListItem
        onMouseEnter={this.addHover}
        onMouseLeave={this.removeHover}
      >
        <StatelessReport {...this.props} showButtons={showButtons} />
      </ReportListItem>
    );
  }
}

export default Report;
