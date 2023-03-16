import React from 'react';
import { FiX } from 'react-icons/fi';
import { Close, Container } from './modal.styles';
import ModalProps from './modal.types';

const Modal = ({ children, imgBackground, close,id }: ModalProps) => {
  return (
    <Container imgBackground={imgBackground} id={id}>
      <Close onClick={close}>
        <FiX size={40}/>
      </Close>
      {children}
    </Container>
  );
};

export default Modal;
