import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// this has styling overrides for the headway widget
// https://docs.headwayapp.co/widget
const HeadwaySpan = styled.span`
  display: block;
  padding: 0.75rem 0.5rem;
  margin: 0px 0.5rem;
  border-radius: 4px;

  > span {
    display: inline-block !important;
    position: relative;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    color: rgb(89, 98, 106);
    height: auto !important;
    width: auto !important;
    &:hover {
      color: #168eea !important;
    }
    &::after {
      content: "What's New" !important;
    }
  }

  > span > span {
    top: 2px !important;
    left: auto !important;
    right: -21px !important;
  }
 `;

class HeadwayWidget extends Component {

  componentDidMount() {
    const config = {
      selector: '#headway',
      account: 'xYno57',
      position: {
        y: 'top',
      },
    };
    Headway.init(config); // eslint-disable-line no-undef
  }

  render() {
    return (
      <HeadwaySpan id="headway" />
    );
  }
}

HeadwayWidget.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadwayWidget;
