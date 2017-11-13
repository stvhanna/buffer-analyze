import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { modal } from '@bufferapp/components/style/zIndex';
import Overlay from '@bufferapp/components/Overlay';

const Card = styled.section`
  width: 660px;
  background: #FFFFFF;
  border: 1px solid #E2E8ED;
  box-shadow: 0px 0px 10px rgba(48, 71, 89, 0.05);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 2.25rem 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: ${modal};
`;

const Modal = (props, children) => {
  if (!props.open) return null;
  return (
    <div>
      <Overlay onClick={props.toggle} />
      <Card>
        {props.children}
      </Card>
    </div>
  );
};

Modal.defaultProps = {
  open: false,
  toggle: () => {},
};

Modal.propTypes = {
  open: PropTypes.bool,
  toggle: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Modal;
