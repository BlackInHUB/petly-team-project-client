import { Logout } from "components/Logout/Logout"
import { MessagesList } from "components/MessagesList/MessagesList"
import { PetsData } from "components/PetsData/PetsData"
import { UserData } from "components/UserData/UserData"
import { UserDataTitle } from "components/UserDataTitle/UserDataTitle"
import { UserDataContainer, UserPageWrapper, UserDataWrapper, NavBtnsContainer, TopContainer, NavBtn, UserAboutWrapper } from "./UserPage.styled"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { messagesOperations } from "redux/messages";
import { AddPetButton } from "components/AddPetButton/AddPetButton"
import { Modal } from "components/Modal/Modal"
import { ModalAddsPet } from "components/ModalAddsPet/ModalAddsPet"

const UserPage = () => {
    const dispatch = useDispatch();
    const [toShow, setToShow] = useState('pets');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);
        
    useEffect(() => {
        setInterval(() => {
            dispatch(messagesOperations.get());
        }, 5000)
    }, [dispatch]);

    useEffect(() => {
        if (!isModalOpen) {
          document.body.style.overflow = '';
        }
      }, [isModalOpen]);

    return (
        <>
        <UserPageWrapper>
            <UserDataWrapper>
            <UserDataTitle title='My information:'/>
            <UserDataContainer>
                <UserData />
                <Logout />
            </UserDataContainer>
            </UserDataWrapper>
            <UserAboutWrapper>
                <TopContainer>
                    <NavBtnsContainer>
                        <NavBtn onClick={() => setToShow('pets')}>My pets</NavBtn>
                        <NavBtn onClick={() => setToShow('messages')}>Messages</NavBtn>
                    </NavBtnsContainer>
                    <AddPetButton onOpenAddsPet={toggleModal} />
                </TopContainer>
                {toShow === 'pets' && <PetsData />}
                {toShow === 'messages' && <MessagesList />}
            </UserAboutWrapper>
        </UserPageWrapper>
        {isModalOpen && (
          <Modal setShow={toggleModal}>
            <ModalAddsPet onClose={toggleModal} onCloseBtn={toggleModal} />
          </Modal>
        )}
        </>
    )
}

export default UserPage;