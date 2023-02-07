import {List} from "./NewsList.styled";
import { NewsListItem } from "./NewsListItem";

export default function NewsList({news}) {

    return (
            <List>
                {news.map(item => <NewsListItem key={item._id} item={item}/>)}
            </List>
    )
}
