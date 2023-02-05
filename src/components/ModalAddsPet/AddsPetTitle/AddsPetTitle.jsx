import { ModalAddsPetWrapper, ModalAddsPetCloseBtn, CloseIcon, ModalAddsPetTitle } from './AddsPetTitle.styled'

export const AddsPetTitle = ({onClick}) => {
    return(
        <>
        <ModalAddsPetWrapper>
        <ModalAddsPetCloseBtn type="button" onClick={onClick}><CloseIcon /></ModalAddsPetCloseBtn>
        <ModalAddsPetTitle>Add pet</ModalAddsPetTitle>
        </ModalAddsPetWrapper>
        </>
    )
}