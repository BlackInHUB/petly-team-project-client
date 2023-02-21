import { Logout } from "components/Logout/Logout"
import { MessagesList } from "components/MessagesList/MessagesList"
import { PetsData } from "components/PetsData/PetsData"
import { UserData } from "components/UserData/UserData"
import { UserDataTitle } from "components/UserDataTitle/UserDataTitle"
import { UserDataContainer,
    UserPageWrapper,
    UserDataWrapper,
    NavBtnsContainer,
    TopContainer,
    NavBtn,
    UserAboutWrapper,
    NewMessagesCount,
    NavMessageBtn,
    ReloadMessagesBtn,
    ReloadIcon
} from "./UserPage.styled"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messagesOperations } from "redux/messages";
import { AddPetButton } from "components/AddPetButton/AddPetButton"
import { Modal } from "components/Modal/Modal"
import { ModalAddsPet } from "components/ModalAddsPet/ModalAddsPet"
import { useAuth } from "hooks/useAuth"

const UserPage = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();
    const [toShow, setToShow] = useState('pets');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);
        
    useEffect(() => {
        if (!isModalOpen) {
          document.body.style.overflow = '';
        }
      }, [isModalOpen]);

    useEffect(() => {
        dispatch(messagesOperations.get());
    }, [dispatch]);

    const {messages} = useSelector(state => state.messages);

    const newMessages = messages?.reduce((acc, message) => {
        if(!message.readed & user._id === message.recipient) {
            return acc + 1;
        };
        return acc;
    }, 0);

    const reloadMessages = () => {
        dispatch(messagesOperations.get());
    };

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
                        <NavBtn active={toShow} onClick={() => setToShow('pets')}>My pets</NavBtn>
                          <NavMessageBtn active={toShow} onClick={() => setToShow('messages')}>
                            Messages
                            {newMessages > 0 &&
                            <NewMessagesCount>
                                {newMessages}
                            </NewMessagesCount>}
                        </NavMessageBtn>
                      
                    </NavBtnsContainer>
                    {toShow === 'pets' && <AddPetButton onOpenAddsPet={toggleModal} />}
                    {toShow === 'messages' && <ReloadMessagesBtn onClick={reloadMessages}><ReloadIcon /></ReloadMessagesBtn>}
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