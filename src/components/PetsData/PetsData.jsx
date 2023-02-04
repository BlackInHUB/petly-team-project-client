// import { UserDataTitle } from "components/UserDataTitle/UserDataTitle"
import { AddPetButton } from "components/AddPetButton/AddPetButton"
import { PetsList } from "components/PetsList/PetsList"
import { AddPetDiv, PetDataTitle } from "./PetsData.styled"


export const PetsData = () => {
    return(
        <>
        <div>
            <AddPetDiv>
                <PetDataTitle>My pets:</PetDataTitle>
                <AddPetButton />
            </AddPetDiv>
            <PetsList />
        </div>
        </>
    )
}