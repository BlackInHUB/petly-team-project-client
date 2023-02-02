
import {List, NewsListItem, Description, DateLink, Date, Link, Decor, Title } from "./NewsList.styled";

export default function NewsList({news}) {
    const elements = news.map(({title, description, _id, url, date}) => {
        return <NewsListItem key={_id} >

            <Decor/>
            <Title>{title}</Title>
            <Description>{description}</Description>
            
            <DateLink>
                 <Date>{date.replaceAll("-", "/")}</Date>
                <Link href={url} target="_blank" rel="noreferrer">Read More</Link>
            </DateLink>
            
        </NewsListItem>
    })

    return (
        <>
            <List>{elements}</List>
        </>
    )
}
