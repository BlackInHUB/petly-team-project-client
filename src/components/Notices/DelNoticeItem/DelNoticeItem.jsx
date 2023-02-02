import { useDispatch } from 'react-redux';
import { deleteOwnNoticeById } from 'redux/notice/noticeOperations';
import {
  DelPetBox,
  DelPetBtn,
  AnimalsBtnDel,
  AnimalsDeleteSvg,
  CancelPetText,
} from './DelNoticeItem.slyled';

function DelNoticeItem({ closeModal, id }) {
  const dispatch = useDispatch();

  const delNotice = id => {
    dispatch(deleteOwnNoticeById(id));
    closeModal();
  };

  return (
    <DelPetBox>
      <CancelPetText>Are you sure to delete this pet ?</CancelPetText>
      <AnimalsBtnDel
        type="button"
        id={id}
        onClick={() => delNotice(id)}
        data-deleteid="deleteid"
      >
        Delete <AnimalsDeleteSvg />
      </AnimalsBtnDel>
      <DelPetBtn
        type="button"
        id={id}
        onClick={closeModal}
        data-cancel="cancel"
      >
        Cancel
      </DelPetBtn>
    </DelPetBox>
  );
}

export default DelNoticeItem;
