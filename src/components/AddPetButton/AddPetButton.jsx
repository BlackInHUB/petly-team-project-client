import { ReactComponent as Plus} from '../../images/icons/addPetBtn/plus.svg'
import { AddPetWrapper, AddPetDesc , AddPetBtn } from './AddPetButton.styled'

export const AddPetButton = () => {
    return(
        <>
            <AddPetWrapper>
                <AddPetBtn className='add-button' type="button">
                    <Plus />
                </AddPetBtn>
                <AddPetDesc className='add-text'>Add pet</AddPetDesc>
            </AddPetWrapper>
        </>
    )
}