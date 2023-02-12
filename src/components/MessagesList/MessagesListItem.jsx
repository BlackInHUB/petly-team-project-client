import { ListItem, ItemDeleteBtn, ItemInfo, ItemText, ItemTitle, DeleteIcon,
ItemInfoSender, ItemInfoTime, Unreaded, Details } from "./MessagesList.styled";
import getTime from "./getTime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { messagesOperations } from "redux/messages";


export const MessagesListItem = ({item, users}) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const {title, message, sender, createdAt, recipient, readed} = item;

    const senderName = users.find(user => user._id === sender).name;
    const sentTime = getTime(createdAt)

    const handleOpen = () => {
        setIsOpen(!isOpen);
        dispatch(messagesOperations.readed(item._id));
    }

    const handleDelete = () => {
        dispatch(messagesOperations.remove(item._id));
    };

    return (
        <ListItem isOpen={isOpen}>
            {!readed && <Unreaded />}
            <ItemInfo onClick={handleOpen}>
                <ItemInfoSender>from: {senderName}</ItemInfoSender> 
                <ItemInfoTime>{sentTime}</ItemInfoTime>
                </ItemInfo>
                <ItemTitle>{title}</ItemTitle>
            {isOpen &&
            <Details>
                <ItemText>{message}</ItemText>
            <ItemDeleteBtn onClick={handleDelete}><DeleteIcon/></ItemDeleteBtn>
        </Details>
            }
            
        </ListItem>
    )
};
