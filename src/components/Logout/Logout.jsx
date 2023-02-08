// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth'

// import { LogoutBtn, LogoutBtnText, LogoutIconStyled  } from './Logout.styled'

// export const Logout = () => {
//     const dispatch = useDispatch();
    
//     return(
//         <>
//         <LogoutBtn onClick={() => dispatch(authOperations.logout())}>
//             <LogoutIconStyled  />
//             <LogoutBtnText>Log Out</LogoutBtnText>
//         </LogoutBtn>
//         </>
//     )
// }

import { useState } from "react";
import { Modal } from "components/Modal/Modal"
import { ModalLogout } from '../ModalLogout/ModalLogout'
import { LogoutBtn, LogoutBtnText, LogoutIconStyled  } from './Logout.styled'

export const Logout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);
    
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