import {ListItem, Description, DateLink, Date, Link, Decor, Title} from './NewsList.styled'

export const NewsListItem = ({item}) => {
    const {title, description, date, url} = item;

    return (
        <ListItem>
            <Decor/>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <DateLink>
                <Date>{date.replaceAll("-", "/")}</Date>
                <Link href={url} target="_blank" rel="noreferrer">Read More</Link>
            </DateLink>
        </ListItem>
    )
}