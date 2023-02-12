import { AddsPetBtnStyleOrange } from './AddsPetBtnOrange.styled'

export const AddsPetBtnOrange = ({type, children, ...rest}) => {
    return (
        <AddsPetBtnStyleOrange type={type} {...rest}>
            {children}
        </AddsPetBtnStyleOrange>
    )
}