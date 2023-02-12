import { MessageForm, MessageTitle, MessageNameInput } from "./ModalMessageStyled";
import React from "react";
import { Modal } from "../Modal/Modal";
import { useState } from 'react';
import InputEmoji from 'react-input-emoji'
import Button from "components/baseComponents/Button/Button";

export const ModalMessage = () => {
    const [ text, setText ] = useState('')
    const [showModal, setShowModal] = useState(false);

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
  };

    return (
        <>
            <button type='button' onClick={handleOpen}>Send message</button>
            {showModal && <Modal setShow={handleClose} onClick={handleClose}>
                <MessageForm action="" onSubmit={handleSubmit}>
                    <MessageTitle htmlFor="message">
                        Send message to seller
                    </MessageTitle>
                    <MessageNameInput id="message" type="text" name="name" placeholder="Enter your name" width="150px" />
                    <InputEmoji
                        value={text}
                        onChange={setText}
                        cleanOnEnter="true"
                        placeholder="Type a message"
                        borderColor="#f59256"
                        borderRadius="20px"
                        fontSize="18px"
                        height="300px"
                    />
                    <Button type="submit" width="100">Send message</Button>
                </MessageForm>
            </Modal>}
        </>
    )
}