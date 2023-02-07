import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

import closeImg from 'images/icons/modal/close_button.svg';
import heartImg from 'images/icons/modal/heart.svg';

import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { getOne } from 'services/notices';

import {
  ModalForm,
  ModalCloseBtn,
  PetPhotoContainer,
  PetPhoto,
  PetCategory,
  PetInfoContainer,
  PetTitle,
  ButtonContainer,
  PetPhotoAndInfoContainer,
  PetPhotoAndInfoAndCommentsContainer,
} from './style';

import PetInfo from './PetInfo';
import Comments from './Comments';
import Button from 'components/baseComponents/Button/Button';

const LearnMoreModal = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [pet, setPet] = useState();

  const { id } = props;
  console.log(id);

  // function usePet() {
  //   const [value, setValue] = useState(null);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   async function getPet() {
  //     try {
  //       setLoading(true);
  //       const { data } = await getOne(id);
  //       setValue(data);
  //     } catch (e) {
  //       setError(e);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   useEffect(() => {
  //     getPet();
  //   }, []);

  //   return [value, error, loading]; // highlight-line
  // }

  // const [value, loading] = usePet();

  const dispatch = useDispatch();
  const { favoritesList } = useAuth();

  const toggleFavorites = () => {
    dispatch(authOperations.favorites(id));
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getOne(id);
        console.log(data);
        setPet(data);
      } catch (e) {
        console.log(e);
        return e;
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  //   const promisedState = newState =>
  //     new Promise(resolve => setPet(newState, resolve));

  //   const getPet = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await getOne(id);
  //       console.log(data);
  //       setPet(data);
  //     } catch (e) {
  //       console.log(e);
  //       return e;
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     getPet();
  //   }, []);

  return (
    <Modal setShow={props.setShow}>
      {isLoading ? (
        <Loader />
      ) : (
        <ModalForm>
          <ModalCloseBtn onClick={() => props.setShow()}>
            <img src={closeImg} width="16px" alt="close" />
          </ModalCloseBtn>
          <PetPhotoAndInfoAndCommentsContainer>
            <PetPhotoAndInfoContainer>
              <PetPhotoContainer>
                <PetPhoto
                  src={
                    pet?.photoUrl ||
                    'http://res.cloudinary.com/dazfphdfk/image/upload/v1675066555/avatar/07fbd5b5-dce0-4641-b3e0-c65688f7b282-noPetPhoto.png'
                  }
                ></PetPhoto>
                <PetCategory>{pet?.category}</PetCategory>
              </PetPhotoContainer>
              <PetInfoContainer>
                <PetTitle>{pet?.title}</PetTitle>
                <PetInfo data={pet}></PetInfo>
              </PetInfoContainer>
            </PetPhotoAndInfoContainer>
            <Comments>{pet?.comments}</Comments>
          </PetPhotoAndInfoAndCommentsContainer>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <ButtonContainer>
              <Button style={{ height: '40px' }}>Contact</Button>
              <Button
                style={{ height: '40px' }}
                buttonStyle="secondary"
                onClick={() => toggleFavorites()}
              >
                {favoritesList?.includes(id) ? 'Remove from' : 'Add to'}&nbsp;
                <img src={heartImg} alt="heart" />
              </Button>
            </ButtonContainer>
          </div>
        </ModalForm>
      )}
    </Modal>
  );
};

LearnMoreModal.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LearnMoreModal;
