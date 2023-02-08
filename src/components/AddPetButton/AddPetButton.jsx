// import { ReactComponent as Plus} from '../../images/icons/addPetBtn/plus.svg'
// import { AddPetWrapper, AddPetDesc , AddPetBtn, PlusIcon } from './AddPetButton.styled'

// export const AddPetButton = ({onOpenAddsPet}) => {
//     return(
//         <>
//             <AddPetWrapper>
//                 <AddPetBtn type="button" onClick={onOpenAddsPet}>
//                     <PlusIcon />
//                 </AddPetBtn>
//                 <AddPetDesc>Add pet</AddPetDesc>
//             </AddPetWrapper>
//         </>
//     )
// }

import { AddPetDesc, AddPetBtn, PlusContainer } from './AddPetButton.styled';
import { ReactComponent as Plus } from '../../images/icons/addPetBtn/plus.svg';

export const AddPetButton = ({ onOpenAddsPet }) => {
  return (
    <AddPetBtn type="button" onClick={onOpenAddsPet}>
      <AddPetDesc>Add pet</AddPetDesc>
      <PlusContainer>
        <Plus />
      </PlusContainer>
    </AddPetBtn>
  );
};