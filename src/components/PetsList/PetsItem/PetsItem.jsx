import { useDispatch } from 'react-redux'
import { authOperations } from 'redux/auth';
// import cat from '../../../images/cat.jpg'
// import { ReactComponent as Delete } from '../../../images/icons/petsItem/delete.svg' 
import { PetsItemWrapper, PetsItemDeleteBtn, PetsItemInfoBlock, PetsItemImg, DeleteIcon, PetsItemDesc, PetsItemSpan } from './PetsItem.styled'

export const PetsItem = ({pet}) => {
    const {_id, name, data, breed, photoUrl, comments} = pet;

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
                <PetsItemDesc><PetsItemSpan>Name:{name}</PetsItemSpan></PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Date of birth:{data}</PetsItemSpan></PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Breed:{breed}</PetsItemSpan></PetsItemDesc>
                <PetsItemDesc><PetsItemSpan>Comments:{comments}</PetsItemSpan></PetsItemDesc>
            </PetsItemInfoBlock>
        </PetsItemWrapper>
        </>
    )
}