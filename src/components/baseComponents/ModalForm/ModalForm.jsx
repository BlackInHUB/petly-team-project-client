import React from 'react';
import PropTypes from 'prop-types';

import closeImg from 'images/icons/modal/close_button.svg';

import { ModalFormStyled, ModalCloseBtn } from './style';

const ModalForm = ({ paddings, width, setShow, children }) => {
  return (
    <ModalFormStyled width={width} paddings={paddings}>
      <ModalCloseBtn
        onClick={() => {
          document.body.style.overflow = '';
          setShow();
        }}
      >
        <img src={closeImg} width="16px" alt="close" />
      </ModalCloseBtn>

      {children}
    </ModalFormStyled>
  );
};

ModalForm.propTypes = {
  paddings: PropTypes.string,
  width: PropTypes.string,
  setShow: PropTypes.func.isRequired,

  children: PropTypes.any,
};

export default ModalForm;
