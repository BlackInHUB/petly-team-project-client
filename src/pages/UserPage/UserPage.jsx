import { Logout } from "components/Logout/Logout"
import { PetsData } from "components/PetsData/PetsData"
import { UserData } from "components/UserData/UserData"
import { UserDataContainer, UserPageWrapper } from "./UserPage.styled"


const UserPage = () => {
    return (
        <UserPageWrapper>
            <UserDataContainer>
                <UserData />
                <Logout />
            </UserDataContainer>
            <PetsData />
        </UserPageWrapper>
    )
}

export default UserPage;