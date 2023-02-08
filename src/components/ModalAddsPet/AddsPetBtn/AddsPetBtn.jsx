import { AddsPetBtnStyle } from './AddsPetBtn.styled'

export const AddsPetBtn = ({type, titleBtn, onClick}) => {
    return (
        <AddsPetBtnStyle type={type} onClick={onClick}>{titleBtn}</AddsPetBtnStyle>
    )
}