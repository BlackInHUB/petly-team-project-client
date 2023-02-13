import {
ListItem,
ItemDeleteBtn,
ItemInfo,
ItemText,
ItemTitle,
DeleteIcon,
ItemInfoSender,
ItemInfoTime,
Unreaded,
Details,
InIcon,
OutIcon,
ReplyBtn,
ReplyIcon,
BtnsWrapper} from "./MessagesList.styled";
import getTime from "./getTime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { messagesOperations } from "redux/messages";
import { useAuth } from "hooks/useAuth";
import { createPortal } from "react-dom";
import { ModalMessage } from "components/ModalMessage/ModalMessage";

const modalRoot = document.querySelector('#modal-root');

export const MessagesListItem = ({item}) => {
    const {users, user} = useAuth();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [createMessageModal, setCreateMessageModal] = useState(false);
    const {title, message, sender, createdAt, recipient, readed} = item;

    if(!users) {
        return;
    };

    const senderName = users.find(user => user._id === sender).name;
    const recipientName = users.find(user => user._id === recipient).name;
    const sentTime = getTime(createdAt)
    const messageOwner = user._id === sender;

    const handleOpen = () => {
        setIsOpen(!isOpen);
        if(!readed & !messageOwner) {
            dispatch(messagesOperations.readed(item._id));
        };
    };

    const handleDelete = () => {
        dispatch(messagesOperations.remove(item._id));
    };

    return (
        <>
            <ListItem isOpen={isOpen} owner={messageOwner}>
                {(!readed && !messageOwner) && <Unreaded />}
                <ItemInfo onClick={handleOpen}>
                    <ItemInfoSender>
                        {messageOwner ? <><OutIcon /> to: {recipientName}</> : <><InIcon /> from: {senderName}</>} 
                    </ItemInfoSender> 
                    <ItemInfoTime>
                        {messageOwner ? <>sent: {sentTime}</> : <>received: {sentTime}</>}
                    </ItemInfoTime>
                </ItemInfo>
                <ItemTitle>{title}</ItemTitle>
                {isOpen &&
                <Details>
                    <ItemText>{message}</ItemText>
                    <BtnsWrapper>
                        {!messageOwner && <ReplyBtn onClick={() => setCreateMessageModal(true)} type="button"><ReplyIcon size={30} /></ReplyBtn>}
                        <ItemDeleteBtn type="button" onClick={handleDelete}><DeleteIcon/></ItemDeleteBtn>
                    </BtnsWrapper>
                </Details>
                }
            </ListItem>
            {createMessageModal &&
            createPortal(
                <ModalMessage
                name={senderName}
                id={sender}
                setShow={setCreateMessageModal}
                />,
                modalRoot
            )}
        </>
    )
};
