import { Logout } from "components/Logout/Logout"
import { MessagesList } from "components/MessagesList/MessagesList"
import { PetsData } from "components/PetsData/PetsData"
import { UserData } from "components/UserData/UserData"
import { UserDataTitle } from "components/UserDataTitle/UserDataTitle"
import { UserDataContainer, UserPageWrapper, UserDataWrapper } from "./UserPage.styled"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { messagesOperations } from "redux/messages";

const UserPage = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        setInterval(() => {
            dispatch(messagesOperations.get());
        }, 5000)
    }, [dispatch]);

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
            <PetsData />
        </UserPageWrapper>
        <MessagesList />
        </>
    )
}

export default UserPage;