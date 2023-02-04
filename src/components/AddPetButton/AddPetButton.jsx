import { ReactComponent as Plus} from '../../images/icons/addPetBtn/plus.svg'
import { AddPetWrapper, AddPetDesc , AddPetBtn } from './AddPetButton.styled'

export const AddPetButton = () => {
    return(
        <>
            <AddPetWrapper>
                <AddPetDesc>Add pet</AddPetDesc>
                <AddPetBtn type="button">
                    <Plus />
                </AddPetBtn>
            </AddPetWrapper>
        </>
    )
}