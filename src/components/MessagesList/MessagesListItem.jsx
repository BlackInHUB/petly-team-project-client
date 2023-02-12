import { useAuth } from "hooks/useAuth";
import { ListItem, ItemDeleteBtn, ItemInfo, ItemText, ItemTitle, DeleteIcon,
ItemInfoSender, ItemInfoTime, Unreaded, Details } from "./MessagesList.styled";
import getTime from "./getTime";
import { useState } from "react";


export const MessagesListItem = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {title, message, sender, createdAt, recipient} = item;
    const {users, user} = useAuth()

    const readed = user.messages.find(message => message._id === item._id).readed;
    const senderName = users.find(user => user._id === sender).name;
    const sentTime = getTime(createdAt)

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <ListItem onClick={handleOpen} isOpen={isOpen}>
            {!readed && <Unreaded />}
            <ItemInfo>
                <ItemInfoSender>from: {senderName}</ItemInfoSender> 
                <ItemInfoTime>{sentTime}</ItemInfoTime>
                </ItemInfo>
                <ItemTitle>{title}</ItemTitle>
            {isOpen &&
            <Details>
                <ItemText>{message}</ItemText>
            <ItemDeleteBtn><DeleteIcon/></ItemDeleteBtn>
        </Details>
            }
            
        </ListItem>
    )
};
