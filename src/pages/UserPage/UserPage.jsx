import { Logout } from "components/Logout/Logout"
import { PetsData } from "components/PetsData/PetsData"
import { UserData } from "components/UserData/UserData"
import { UserDataTitle } from "components/UserDataTitle/UserDataTitle"
import { UserDataContainer, UserPageWrapper } from "./UserPage.styled"


const UserPage = () => {
    return (
        <UserPageWrapper>
            <UserDataTitle title='My information:'/>
            <UserDataContainer>
                <UserData />
                <Logout />
            </UserDataContainer>
            <PetsData />
        </UserPageWrapper>
        </>
    )
}

export default UserPage;