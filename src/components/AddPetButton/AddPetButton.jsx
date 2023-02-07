import { ReactComponent as Plus} from '../../images/icons/addPetBtn/plus.svg'
import { AddPetWrapper, AddPetDesc , AddPetBtn } from './AddPetButton.styled'

export const AddPetButton = ({onOpenAddsPet}) => {
    return(
        <>
            <AddPetWrapper>
                <AddPetDesc>Add pet</AddPetDesc>
                <AddPetBtn type="button" onClick={onOpenAddsPet}>
                    <Plus />
                </AddPetBtn>
                <AddPetDesc className='add-text'>Add pet</AddPetDesc>
            </AddPetWrapper>
        </>
    )
}