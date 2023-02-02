import { UserDataTitle } from "components/UserDataTitle/UserDataTitle"
import { AddPetButton } from "components/AddPetButton/AddPetButton"
import { PetsList } from "components/PetsList/PetsList"
import { PetsDataWrapper, AddPetDiv  } from "./PetsData.styled"


export const PetsData = () => {
    return(
        <>
        <PetsDataWrapper>
            <AddPetDiv>
                <UserDataTitle title='My pets:' />
                <AddPetButton />
            </AddPetDiv>
            <PetsList />
        </PetsDataWrapper>
        </>
    )
}