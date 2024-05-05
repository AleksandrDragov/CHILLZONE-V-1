import React from 'react';
import { ModalContainer, ModalBackground, CloseButton } from './Styled';
import { useEffect } from 'react';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleEscapeKeyPress = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscapeKeyPress);
    return () => {
      window.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [onClose]);

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
