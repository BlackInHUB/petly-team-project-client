import { ModalStyled } from "./ModalStyled";
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

export const Modal = ({children, setShow }) => {
const modalRoot = document.querySelector('#modal-root');

    useEffect(() => {
    const handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log("клик по ESCAPE");
      setShow();
    }
  };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    }, [setShow]);
  
   const handleBackdropClick = event => {
     if (event.currentTarget === event.target) {
       console.log("клик по бекдропу");
      setShow();
    }
  };

    return createPortal(
      <ModalStyled onClick={handleBackdropClick}>
        {children}
      </ModalStyled>,
      modalRoot,
    );
 }
