import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

import Notiflix from 'notiflix/build/notiflix-notify-aio';
import heartImg from 'images/icons/modal/heart.svg';

import { Modal } from 'components/Modal/Modal';
import ModalForm from 'components/baseComponents/ModalForm/ModalForm';
import { Loader } from 'components/Loader/Loader';
import { getOne } from 'services/notices';

import { Link } from 'react-router-dom';

import {
  PetPhotoContainer,
  PetPhoto,
  PetCategory,
  PetInfoContainer,
  PetTitle,
  ButtonContainer,
  PetPhotoAndInfoContainer,
  PetPhotoAndInfoAndCommentsContainer,
  FavoritIcon,
  FavoritIconContainer,
  ButtonDiv,
  ContactButtonsContainer,
  CallIcon,
  ProfileIcon,
} from './style';

import PetInfo from './PetInfo';
import Comments from './Comments';
import Button from 'components/baseComponents/Button/Button';

const LearnMoreModal = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [pet, setPet] = useState();

  const { id } = props;

  const dispatch = useDispatch();
  const { favoritesList, isLoggedIn, user } = useAuth();

  const toggleFavorites = () => {
    isLoggedIn
      ? dispatch(authOperations.favorites(id))
      : Notiflix.Notify.failure(
          `You must log in to add Notice to the favorite list`,
          {
            timeout: 3000,
          }
        );
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getOne(id);
        setPet(data);
      } catch (e) {
        return e;
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <Modal setShow={props.setShow}>
          <ModalForm width={props.width} setShow={props.setShow}>
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
                  {favoritesList?.includes(id) && (
                    <FavoritIconContainer>
                      <FavoritIcon />
                    </FavoritIconContainer>
                  )}
                </PetPhotoContainer>
                <PetInfoContainer>
                  <PetTitle>{pet?.title}</PetTitle>
                  <PetInfo data={pet}></PetInfo>
                </PetInfoContainer>
              </PetPhotoAndInfoContainer>
              <Comments>{pet?.comments}</Comments>
            </PetPhotoAndInfoAndCommentsContainer>
            {isLoggedIn && (
              <ButtonDiv>
                <ButtonContainer>
                  {!(user._id === pet?.owner._id) && (
                    <ContactButtonsContainer>
                      <Button
                        buttonStyle="secondary"
                        style={{ height: '40px' }}
                        onClick={() =>
                          window.open(`tel:${pet?.owner.phone}`, '_self')
                        }
                      >
                        <CallIcon />
                      </Button>
                      <Link
                        to={{
                          pathname: `/profile/${pet.owner._id}`,
                        }}
                      >
                        <Button
                          buttonStyle="secondary"
                          style={{ height: '40px' }}
                          onClick={() => {}}
                        >
                          <ProfileIcon />
                        </Button>
                      </Link>
                    </ContactButtonsContainer>
                  )}
                  {!(user._id === pet?.owner._id) && (
                    <Button
                      style={{ height: '40px' }}
                      buttonStyle="secondary"
                      onClick={() => toggleFavorites()}
                    >
                      {favoritesList?.includes(id) ? 'Remove from' : 'Add to'}
                      &nbsp;
                      <img src={heartImg} alt="heart" />
                    </Button>
                  )}
                </ButtonContainer>
              </ButtonDiv>
            )}
          </ModalForm>
        </Modal>
      )}
    </>
  );
};

LearnMoreModal.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LearnMoreModal;
