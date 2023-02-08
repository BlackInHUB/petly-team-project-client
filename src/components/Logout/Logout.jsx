import { useState, useEffect  } from "react";
import { Modal } from "components/Modal/Modal"
import { ModalLogout } from '../ModalLogout/ModalLogout'
import { LogoutBtn, LogoutBtnText, LogoutIconStyled  } from './Logout.styled'

export const Logout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);

    useEffect(() => {
        if (!isModalOpen) {
            document.body.style.overflow = ''
        }
    }, [isModalOpen])
    
    return(
        <>
        <LogoutBtn onClick={toggleModal}>
            <LogoutIconStyled  />
            <LogoutBtnText>Log Out</LogoutBtnText>
        </LogoutBtn>

        {isModalOpen  &&(
              <Modal setShow={toggleModal}>    
              < ModalLogout onClose={toggleModal} onCloseBtn={toggleModal}/>
              </Modal>
          )}
        </>
    )
}