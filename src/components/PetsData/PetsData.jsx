import { useState } from "react";
import { AddPetButton } from "components/AddPetButton/AddPetButton"
import { PetsList } from "components/PetsList/PetsList"
import { Modal } from "components/Modal/Modal"
import { ModalAddsPet } from "components/ModalAddsPet/ModalAddsPet";
import { AddPetWrapper, AddPetDiv, PetDataTitle, PetDataWrapper, PetDataInfo } from "./PetsData.styled"
import { useAuth } from "hooks/useAuth";

export const PetsData = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);

    const { pets } = useAuth()
    console.log('pets', pets)

    return(
        <>
        <AddPetWrapper>
            <AddPetDiv>
                <PetDataTitle>My pets:</PetDataTitle>
                <AddPetButton onOpenAddsPet={toggleModal}/>
            </AddPetDiv>

            {pets.length === 0 ?
            (<PetDataWrapper>
              <PetDataInfo>Unfortunately there is no one here yet.</PetDataInfo>
            </PetDataWrapper>) :
            <PetsList />
          }

            {isModalOpen  &&(
              <Modal setShow={toggleModal}>    
                <ModalAddsPet onClose={toggleModal} onCloseBtn={toggleModal}/>
              </Modal>
          )}
        </AddPetWrapper>
        </>
    )
}