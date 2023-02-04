import cat from '../../../images/cat.jpg'
import { ReactComponent as Delete } from '../../../images/icons/petsItem/delete.svg' 
import { PetsItemWrapper, PetsItemDeleteBtn, PetsItemInfoBlock, PetsItemImg, PetsItemDesc, PetsItemSpan } from './PetsItem.styled'
export const PetsItem = () => {
    return(
        <>
        <PetsItemWrapper>
            <PetsItemImg src={cat} alt='cat'/>
            <PetsItemInfoBlock>
                <PetsItemDeleteBtn><Delete /></PetsItemDeleteBtn>
                <PetsItemDesc><PetsItemSpan>Name:</PetsItemSpan></PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Date of birth:</PetsItemSpan></PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Breed:</PetsItemSpan></PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Comments:</PetsItemSpan></PetsItemDesc>
            </PetsItemInfoBlock>
        </PetsItemWrapper>
        </>
    )
}