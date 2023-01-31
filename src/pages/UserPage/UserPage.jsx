import { UserData } from "components/UserData/UserData";
import { Logout } from "components/Logout/Logout";
import { UserDataTitle } from "components/UserDataTitle/UserDataTitle";
import { PetsData } from "components/PetsData/PetsData";
import { UserPageWrapper, UserDataLogoutContainer } from './UserPage.styled'

const UserPage = () => {
    return(
        <>
        <UserPageWrapper>
            <UserDataTitle title='My information:' />
            <UserDataLogoutContainer>
                <UserData />
                <Logout />
            </UserDataLogoutContainer>
            <UserDataTitle title='My pets:' />
            <PetsData />
        </UserPageWrapper>
        </>
    )
}

export default UserPage;