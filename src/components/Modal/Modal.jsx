import { ModalStyled } from "./ModalStyled";
import { createPortal } from 'react-dom';
// import { useEffect } from 'react';

export const Modal = ({children}) => {
const modalRoot = document.querySelector('#modal-root');

//  const handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       props.onClose();
//     }
//   };

//     useEffect(() => {
//     const handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       props.onClose();
//     }
//   };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [props]);

    return createPortal(
      <ModalStyled >
        <div>{children}</div>
      </ModalStyled>,
      modalRoot,
    );
 }

// --функцию onClose нужно заменить на правильную-- ;