import {
  MessageForm,
  MessageTitle,
  MessageNameInput,
  ButtonWrapper,
} from './ModalMessageStyled';
import React from 'react';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import InputEmoji from 'react-input-emoji';
import Button from 'components/baseComponents/Button/Button';
import { Error } from 'components/AuthForm/style';

import { newMessage } from 'services/messages';
import Notiflix from 'notiflix/build/notiflix-notify-aio';
import ButtonSpinner from 'components/baseComponents/ButtonSpinner/ButtonSpinner';

export const ModalMessage = ({ id, name, setShow }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const onChangeInput = event => {
    setTitle(event.target.value);
  };

  const handleClose = () => {
    setShow(false);
    document.body.style.overflow = '';
  };

  const handleSubmit = async event => {
    setIsError(null);

    if (!text || !title) {
      setIsError('enter title and text');
      return;
    }
    const message = { title: title, message: text };

    const recipientId = id;

    try {
      setIsLoading(true);
      await newMessage(message, recipientId);
      Notiflix.Notify.success('Your message successfully sent', {
        timeout: 3000,
      });
    } catch (e) {
      Notiflix.Notify.failure('Something went wrong', {
        timeout: 3000,
      });
      return e;
    } finally {
      setIsLoading(false);
      handleClose();
    }
  };

  return (
    <>
      <Modal setShow={handleClose} onClick={handleClose}>
        <MessageForm action="" onSubmit={handleSubmit}>
          <MessageTitle htmlFor="message">
            {`Send message to ${name}`}
          </MessageTitle>
          <MessageNameInput
            maxLength="36"
            placeholder="Type a title"
            value={title}
            onChange={onChangeInput}
          />

          <InputEmoji
            maxLength="240"
            onEnter={handleSubmit}
            value={text}
            onChange={setText}
            placeholder="Type a message"
            borderRadius="20px"
            fontSize="18px"
            height="300px"
          />
          <ButtonWrapper>
            <Button onClick={handleSubmit} style={{ padding: '9px 12px' }}>
              {isLoading ? <ButtonSpinner /> : 'Send message'}{' '}
              {isError && <Error>{isError}</Error>}
            </Button>
          </ButtonWrapper>
        </MessageForm>
      </Modal>
    </>
  );
};
