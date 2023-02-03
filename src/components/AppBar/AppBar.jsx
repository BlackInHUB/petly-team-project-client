import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { AuthNav } from "./AuthNav";
import { UserNav } from "./UserNav";
import { Nav } from "./Nav";
import { Modal } from 'components/Modal/Modal';
import { AppBarWrapper } from "./AppBarStyled";
import Logo from '../../images/petly_logo.svg';
import Burger from "../../images/icons/modal/burger_menu.svg";
import CloseBtn from "../../images/icons/modal/close_button.svg";

export const AppBar = () => {

    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const [showModal, setShowModal] = useState(false);
    const handleOpen = () => {
    setShowModal(true);
  }
  
  const handleClose = () =>  {
    setShowModal(false);
  }

    return (
        <AppBarWrapper>
            <img src={Logo} alt="PETLY_logo" width="94px" height="32px"/>
            <Nav />
            <div className='user'>
                {isLoggedIn ? <UserNav /> : <AuthNav /> }
            </div>
            <button className='open-modal-btn' type='button' onClick={handleOpen}><img src={Burger} alt="" width="40px" height="40px" /></button>
            
            {showModal && <Modal>
                <img src={Logo} alt="PETLY_logo" width="94px" height="32px"/>
                <div className='user-modal'>
                    {isLoggedIn ? <UserNav onClick={handleClose}/> : <AuthNav onClick={handleClose}/>}
                </div>
                <Nav className='nav-modal' onClick={handleClose}/>
                <button className="close-modal-btn" type='button' onClick={handleClose}>
                    <img src={CloseBtn} alt="" width="40px" height="40px"/>
                </button>
            </Modal>}

        </AppBarWrapper>
    );
}


