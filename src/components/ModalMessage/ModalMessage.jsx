import { MessageForm, MessageTitle } from './ModalMessageStyled';
import React from 'react';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import InputEmoji from 'react-input-emoji';
import Button from 'components/baseComponents/Button/Button';
import { useAuth } from 'hooks/useAuth';

import { newMessage } from 'services/messages';
import Notiflix from 'notiflix/build/notiflix-notify-aio';
import ButtonSpinner from 'components/baseComponents/ButtonSpinner/ButtonSpinner';

export const ModalMessage = ({ id, name, setShow }) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleClose = () => {
    setShow(false);
    document.body.style.overflow = '';
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(text);
    console.log(id);
    const message = { title: user._id, message: text };
    console.log(message);
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
          <p>{`from: ${user.name}`}</p>

          <InputEmoji
            value={text}
            onChange={setText}
            placeholder="Type a message."
            borderColor="#f59256"
            borderRadius="20px"
            fontSize="18px"
            height="300px"
          />
          <Button type="submit" style={{ width: '300px', padding: '9px 12px' }}>
            {isLoading ? <ButtonSpinner /> : 'Send message'}
          </Button>
        </MessageForm>
      </Modal>
    </>
  );
};
