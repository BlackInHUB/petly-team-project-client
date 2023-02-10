import { useDispatch } from 'react-redux'
import { authOperations } from 'redux/auth';
import { ModalWrapper, CloseBtnWrapper, ModalCloseBtn, CloseIcon, ModalDescription, ModalButtonWrapper, ModalButton } from './ModalConfirmDelete.styled'

export const ModalConfirmDelete = ({_id, onClose, onCloseBtn}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(authOperations.removePet(_id))
        onClose()
    };

    return(
        <>
        <ModalWrapper>
            <CloseBtnWrapper>
                <ModalCloseBtn type="button" onClick={onCloseBtn}><CloseIcon /></ModalCloseBtn>
            </CloseBtnWrapper>
            <ModalDescription>Are you sure you want to delete the pet card?</ModalDescription>
            <ModalButtonWrapper>
                <ModalButton type='button' onClick={handleDelete}>Yes</ModalButton>
                <ModalButton type='button' onClick={onCloseBtn} style={{ backgroundColor: "#F59256", color: "white", marginLeft: '20px'}}>No</ModalButton>
            </ModalButtonWrapper>
        </ModalWrapper>
        </>
    )
}