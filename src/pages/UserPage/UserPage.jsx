import { Logout } from "components/Logout/Logout"
import { PetsData } from "components/PetsData/PetsData"
import { UserData } from "components/UserData/UserData"
import { UserDataTitle } from "components/UserDataTitle/UserDataTitle"
import { UserDataLogoutContainer, UserPageWrapper } from "./UserPage.styled"


export const UserPage = () => {
    return (
        <UserPageWrapper>
            <UserDataTitle title='My information:'/>
            <UserDataLogoutContainer>
                <UserData />
                <Logout />
            </UserDataLogoutContainer>
            <PetsData />
        </UserPageWrapper>
    )
}