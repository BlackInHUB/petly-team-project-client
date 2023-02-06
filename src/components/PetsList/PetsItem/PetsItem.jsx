// import cat from '../../../images/cat.jpg'
// import { ReactComponent as Delete } from '../../../images/icons/petsItem/delete.svg' 
import { PetsItemWrapper, PetsItemDeleteBtn, PetsItemInfoBlock, PetsItemImg, DeleteIcon, PetsItemDesc, PetsItemSpan } from './PetsItem.styled'
export const PetsItem = ({name, data, breed, photoUrl, comments}) => {
    return(
        <>
        <PetsItemWrapper>
            <PetsItemImg src={photoUrl} alt={name}/>
            <PetsItemInfoBlock>
                <PetsItemDeleteBtn><DeleteIcon /></PetsItemDeleteBtn>
                <PetsItemDesc><PetsItemSpan>Name:{name}</PetsItemSpan></PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Date of birth:{data}</PetsItemSpan></PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Breed:{breed}</PetsItemSpan></PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Comments:{comments}</PetsItemSpan></PetsItemDesc>
            </PetsItemInfoBlock>
        </PetsItemWrapper>
        </>
    )
}