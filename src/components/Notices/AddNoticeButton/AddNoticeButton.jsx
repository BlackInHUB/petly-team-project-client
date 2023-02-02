import useMatchMedia from 'hooks/useMatchMedia';
import { AddPetBox, AddPetBtn, AddPetSvg } from './AddNoticeButton.styled';

function AddNoticeButton({ handleClick }) {
  const { isMobile } = useMatchMedia();

  return (
    <>
      <AddPetBox>
        {!isMobile && <span>Add pet </span>}
        <AddPetBtn onClick={handleClick} type="button" id="1" data-add="add">
          <AddPetSvg />
          {isMobile && <span>Add pet </span>}
        </AddPetBtn>
      </AddPetBox>
    </>
  );
}

export default AddNoticeButton;
