import { ModalStyled } from './ModalStyled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

export const Modal = ({ children, setShow }) => {
  const modalRoot = document.querySelector('#modal-root');

  document.body.style.overflow = 'hidden';
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('клик по ESCAPE');
        document.body.style.overflow = '';
        setShow();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShow]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      document.body.style.overflow = '';
      setShow();
    }
  };

  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;
    document.body.style.overflow = '';
    setShow();
  });

  return createPortal(
    <ModalStyled onMouseDown={handleBackdropClick}>{children}</ModalStyled>,
    modalRoot
  );
};
