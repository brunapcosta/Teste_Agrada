import React, {useEffect} from "react";
import { Button } from "../Button";
import { ModalContainer } from './styles';

function Modal({ isOpen, onClose }) {

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null; 

  return (

    <ModalContainer>
      {isOpen && (
        <div>
          <Button>Login</Button>
          <p>OU</p>
          <Button>Cadastro</Button>
        </div>
      )}
    </ModalContainer>
  );
}

export default Modal;