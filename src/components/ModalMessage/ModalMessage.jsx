import { MessageForm, MessageTitle, MessageNameInput } from "./ModalMessageStyled";
import React from "react";
import { Modal } from "../Modal/Modal";
import { useState } from 'react';
import InputEmoji from 'react-input-emoji';
import Button from "components/baseComponents/Button/Button";
import { useAuth } from "hooks/useAuth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const ModalMessage = () => {
    const [ text, setText ] = useState('')
    const [showModal, setShowModal] = useState(false);
    const { user } = useAuth();
    
    const handleOpen = () => {
    setShowModal(true);
  }

  const handleClose = () =>  {
    setShowModal(false);
    document.body.style.overflow = '';
    }
    
  const handleSubmit = event => {
      event.preventDefault();
      event.target.reset();
      setText('');
      toast.success('Your message successfully sent', {
            theme: "colored"
        });
  };

    return (
        <>
            <button type='button' onClick={handleOpen}>Send message</button>
            {showModal && <Modal setShow={handleClose} onClick={handleClose}>
                <MessageForm action="" onSubmit={handleSubmit}>
                    <MessageTitle htmlFor="message">
                        Send message to seller
                    </MessageTitle>
                    <MessageNameInput id="message" type="text" name="name" value={user.name} readOnly />
                    <InputEmoji
                        value={text}
                        onChange={setText}
                        placeholder="Type a message."
                        borderColor="#f59256"
                        borderRadius="20px"
                        fontSize="18px"
                        height="300px"
                    />
                    <Button type="submit" style={{ width: '300px', padding: '9px 12px' }}>Send message</Button>
                </MessageForm>
                <ToastContainer autoClose={3000} />
            </Modal>}
        </>
    )
}