import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messagesOperations } from "redux/messages";
import { authOperations } from "redux/auth";
import { List } from "./MessagesList.styled";
import { MessagesListItem } from "./MessagesListItem";

export const MessagesList = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(authOperations.getUsers());
        dispatch(messagesOperations.get());
    }, [dispatch]);

    const {messages} = useSelector(state => state.messages);
    
    if(!messages) {
        return;
    };

    return (
        <List>
            {messages.map(item => <MessagesListItem key={item._id._id} item={item._id} />)}
        </List>
    )
};