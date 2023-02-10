import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { AuthNav } from "./AuthNav";
import { UserNav } from "./UserNav";
import { Nav } from "./Nav";
import { Modal } from 'components/Modal/Modal';
import { AppBarWrapper, ModalWrapper, HeaderModal, UserModal } from "./AppBarStyled";
import Logo from '../../images/petly_logo.svg';
import Burger from "../../images/icons/modal/burger_menu.svg";
import CloseBtn from "../../images/icons/modal/close_button.svg";
import { useState } from 'react';

export const AppBar = () => {

    const [showModal, setShowModal] = useState(false);
    const handleOpen = () => {
    setShowModal(true);
  }
  
  const handleClose = () =>  {
    setShowModal(false);
    document.body.style.overflow = '';
  }
    const {isLoggedIn} = useAuth();

    return (
        <AppBarWrapper>
            <img src={Logo} alt="PETLY_logo" width="94px" height="32px"/>
            <Nav />
            <div className='user'>
                {isLoggedIn ? <UserNav /> : <AuthNav /> }
            </div>
            <button className='open-modal-btn' type='button' onClick={handleOpen}><img src={Burger} alt="" width="40px" height="40px" /></button>
            
            {showModal && <Modal setShow={handleClose} onClick={handleClose}>
                <ModalWrapper>
                    <HeaderModal>
                        <img className='logo-modal' src={Logo} alt="PETLY_logo" width="94px" height="32px" />
                        <button className="close-modal-btn" type='button' onClick={handleClose}>
                            <img src={CloseBtn} alt="" width="40px" height="40px"/>
                        </button>
                    </HeaderModal>
                    <UserModal className='user-modal'>
                        {isLoggedIn ? <UserNav onClick={handleClose}/> : <AuthNav className='auth-modal' onClick={handleClose} />}
                    </UserModal>
                    <Nav className='nav-modal' onClick={handleClose}/>
                </ModalWrapper>
            </Modal>}
        </AppBarWrapper>
    );
}


