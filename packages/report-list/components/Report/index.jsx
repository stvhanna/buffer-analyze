import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
} from '@bufferapp/components';
import CloseIcon from '@bufferapp/components/Icon/Icons/CloseIcon';

import {
  Button,
  VerticalDivider,
} from '@bufferapp/analyze-shared-components';

import moment from 'moment';
import styled from 'styled-components';

const ReportListItem = styled.li`
  display: flex;
  background: #FFFFFF;
  border: 1px solid #D5E3EF;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  margin-bottom: .5rem;
`;

const ReportText = styled.span`
  display: flex;
  width: 100%;
  padding: ${props => (props.small ? '.75rem 1rem' : '1.5rem 1.25rem')};
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ButtonContainer = styled.span`
  position: absolute;
  right: 1rem;
  display: flex;
`;


const DeleteButton = styled(Button)`
  &:before {
    width: 1px
    height: 1px;
    display: block;
    content: "";
  }
`;

const Name = styled.span`
  color: #343E47;
`;

const Date = styled.span`
  color: #c1c1c1;
`;

class Report extends Component {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    updated_at: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    selectReport: PropTypes.func.isRequired,
    removeReport: PropTypes.func,
    small: PropTypes.bool,
  };

  static defaultProps = {
    small: false,
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
    const {
      _id,
      updated_at,
      name,
      selectReport,
      small,
      removeReport,
    } = this.props;
    const canShowRemoveButton = this.state.hovered && removeReport;
    return (
      <ReportListItem
        onMouseEnter={this.addHover}
        onMouseLeave={this.removeHover}
      >
        <ReportText small={small}>
          <Text size={small ? 'small' : null} weight="bold"><Name>{name}</Name></Text>
          { !canShowRemoveButton && <Text size={small ? 'small' : null}><Date>{moment(updated_at, 'x').format('MMMM D, YYYY')}</Date></Text>}
          { canShowRemoveButton && <ButtonContainer>
            <Button onClick={() => selectReport(_id)}><Text>View report</Text></Button>
            <VerticalDivider />
            <DeleteButton noStyle onClick={() => removeReport(_id)}><CloseIcon color="torchRed"/></DeleteButton>
          </ButtonContainer> }
        </ReportText>
      </ReportListItem>
    );
  }
}

export default Report;
