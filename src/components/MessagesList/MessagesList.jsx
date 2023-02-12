import { useSelector } from "react-redux";
import { List } from "./MessagesList.styled";
import { MessagesListItem } from "./MessagesListItem";

export const MessagesList = () => {
    const {messages} = useSelector(state => state.messages);

    if(!messages) {
        return;
    };

    return (
        <List>
            {messages.map(item => <MessagesListItem key={item._id} item={item} />)}
        </List>
    )
};