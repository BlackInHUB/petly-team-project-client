import { AddsPetBtnStyle } from './AddsPetBtn.styles'

export const AddsPetBtn = ({type, titleBtn, onClick}) => {
    return (
        <AddsPetBtnStyle type={type} onClick={onClick}>{titleBtn}</AddsPetBtnStyle>
    )
}