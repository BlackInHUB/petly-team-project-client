import { useState, useEffect } from 'react';
import { AddPetButton } from 'components/AddPetButton/AddPetButton';
import { PetsList } from 'components/PetsList/PetsList';
import { Modal } from 'components/Modal/Modal';
import { ModalAddsPet } from 'components/ModalAddsPet/ModalAddsPet';
import {
  AddPetWrapper,
  AddPetDiv,
  PetDataTitle,
  PetDataWrapper,
  PetDataInfo,
} from './PetsData.styled';
import { useAuth } from 'hooks/useAuth';

export const PetsData = props => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen(state => !state);

  let { pets } = useAuth();
  let profile = false;
  if (props.pets) {
    pets = props.pets;
    profile = true;
  }

  // useEffect(() => {
  //   if (!isModalOpen) {
  //     document.body.style.overflow = '';
  //   }
  // }, [isModalOpen]);

  return (
    <>
      <AddPetWrapper>
        {!profile && (
          <AddPetDiv>
            {/* <PetDataTitle>My pets:</PetDataTitle> */}
            {/* <AddPetButton onOpenAddsPet={toggleModal} /> */}
          </AddPetDiv>
        )}

        {pets.length === 0 ? (
          <PetDataWrapper>
            <PetDataInfo>Unfortunately there is no one here yet.</PetDataInfo>
          </PetDataWrapper>
        ) : (
          <PetsList pets={pets} profile={profile} />
        )}

        {/* {isModalOpen && (
          <Modal setShow={toggleModal}>
            <ModalAddsPet onClose={toggleModal} onCloseBtn={toggleModal} />
          </Modal>
        )} */}
      </AddPetWrapper>
    </>
  );
};
