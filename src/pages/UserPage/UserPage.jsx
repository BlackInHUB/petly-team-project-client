import { UserData } from "components/UserData/UserData";
import { Logout } from "components/Logout/Logout";
import { PetsData } from "components/PetsData/PetsData";
import { WrapperUserPage } from './UserPage.styled'

const UserPage = () => {
    return(
        <>
        <WrapperUserPage>
            <div>
                <UserData />
                <Logout />
            </div>
            <PetsData />
        </WrapperUserPage>
        </>
    )
}

export default UserPage;