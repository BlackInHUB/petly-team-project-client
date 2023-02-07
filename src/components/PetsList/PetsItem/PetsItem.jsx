import { useDispatch } from 'react-redux'
import { authOperations } from 'redux/auth';
import { PetsItemWrapper, PetsItemDeleteBtn, PetsItemInfoBlock, PetsItemImg, DeleteIcon, PetsItemDesc, PetsItemSpan } from './PetsItem.styled'

export const PetsItem = ({pet}) => {
    const {_id, name, birthday, breed, photoUrl, comments} = pet;

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(authOperations.removePet(_id))
    };

    return(
        <>
        <PetsItemWrapper>
            <PetsItemImg src={photoUrl} alt={name}/>
            <PetsItemInfoBlock>
                <PetsItemDeleteBtn type='button' onClick={handleDelete}><DeleteIcon /></PetsItemDeleteBtn>
                <PetsItemDesc><PetsItemSpan>Name:</PetsItemSpan>{name}</PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Date of birth:</PetsItemSpan>{birthday}</PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Breed:</PetsItemSpan>{breed}</PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Comments:</PetsItemSpan>{comments}</PetsItemDesc>
            </PetsItemInfoBlock>
        </PetsItemWrapper>
        </>
    )
}