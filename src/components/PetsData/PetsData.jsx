import { useState } from "react";
import { AddPetButton } from "components/AddPetButton/AddPetButton"
import { PetsList } from "components/PetsList/PetsList"
import { Modal } from "components/Modal/Modal"
import { ModalAddsPet } from "components/ModalAddsPet/ModalAddsPet";
import { AddPetDiv, PetDataTitle } from "./PetsData.styled"
import { useAuth } from "hooks/useAuth";


export const PetsData = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);

    const { pets } = useAuth()
    // console.log('pets', pets)

    // useEffect(() => {
    //     dispatch(fetchContacts())
    // }, [dispatch]);

    return(
        <>
        <div>
            <AddPetDiv>
                <PetDataTitle>My pets:</PetDataTitle>
                <AddPetButton onOpenAddsPet={toggleModal}/>
            </AddPetDiv>
            <PetsList />

            {isModalOpen  &&(
              <Modal setShow={toggleModal}>    
                <ModalAddsPet onClose={toggleModal} onCloseBtn={toggleModal}/>
              </Modal>
          )}
        </div>
        </>
    )
}