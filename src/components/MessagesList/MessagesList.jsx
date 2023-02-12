import { useSelector } from "react-redux";
import { List } from "./MessagesList.styled";
import { MessagesListItem } from "./MessagesListItem";
import { useAuth } from "hooks/useAuth";

export const MessagesList = () => {
    const {messages} = useSelector(state => state.messages);
    const {users} = useAuth();

    if(!messages) {
        return;
    };

    return (
        <List>
            {messages.map(item => <MessagesListItem key={item._id} item={item} users={users} />)}
        </List>
    )
};