import { AddsPetBtnStyle } from './AddsPetBtn.styled'

export const AddsPetBtn = ({type, children, ...rest}) => {
    return (
        <AddsPetBtnStyle type={type} {...rest}>
            {children}
        </AddsPetBtnStyle>
    )
}