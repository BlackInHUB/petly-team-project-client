// import { ReactComponent as Plus} from '../../images/icons/addPetBtn/plus.svg'
import { AddPetWrapper, AddPetDesc , AddPetBtn, PlusIcon } from './AddPetButton.styled'

export const AddPetButton = ({onOpenAddsPet}) => {
    return(
        <>
            <AddPetWrapper>
                <AddPetBtn type="button" onClick={onOpenAddsPet}>
                    <PlusIcon />
                </AddPetBtn>
                <AddPetDesc>Add pet</AddPetDesc>
            </AddPetWrapper>
        </>
    )
}