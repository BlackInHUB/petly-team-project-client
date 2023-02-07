import { AddsPetBtnStyleOrange } from './AddsPetBtnOrange.styled'

export const AddsPetBtnOrange = ({type, titleBtn, onClick}) => {
    return (
        <AddsPetBtnStyleOrange type={type} onClick={onClick}>{titleBtn}</AddsPetBtnStyleOrange>
    )
}