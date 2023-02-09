import { useState, useEffect } from "react";
import { Modal } from "components/Modal/Modal"
import { ModalConfirmDelete } from 'components/ModalConfirmDelete/ModalConfirmDelete';
import { PetsItemWrapper, PetsItemDeleteBtn, PetsItemInfoBlock, PetsItemImg, DeleteIcon, PetsItemDesc, PetsItemSpan } from './PetsItem.styled'

export const PetsItem = ({pet}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);

    const {_id, name, birthday, breed, photoUrl, comments} = pet;

    useEffect(() => {
        if (!isModalOpen) {
            document.body.style.overflow = ''
        }
    }, [isModalOpen])

    return(
        <>
             <PetsItemWrapper>
            <PetsItemImg src={photoUrl} alt={name}/>
            <PetsItemInfoBlock>
                <PetsItemDeleteBtn type='button' onClick={toggleModal}><DeleteIcon /></PetsItemDeleteBtn>
                <PetsItemDesc><PetsItemSpan>Name:</PetsItemSpan>{name}</PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Date of birth:</PetsItemSpan>{birthday}</PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Breed:</PetsItemSpan>{breed}</PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Comments:</PetsItemSpan>{comments}</PetsItemDesc>
            </PetsItemInfoBlock>
        </PetsItemWrapper>

        {isModalOpen  &&(
              <Modal setShow={toggleModal}>    
              < ModalConfirmDelete _id={_id} onClose={toggleModal} onCloseBtn={toggleModal}/>
              </Modal>
          )}
        </>
    )
}