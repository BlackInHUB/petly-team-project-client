import React from "react";
import NewsList from "../../components/News/NewsList/NewsList";
import { useState, useEffect } from "react";
import {Container} from "./NewsPage.styled";
import { Search } from "components/baseComponents/Search/Search";
import { Title } from "components/baseComponents/Title/Title";
import { getNews } from "redux/news/news";
import { useDispatch, useSelector } from "react-redux";
import { newsFilter } from "components/News/newsFilter";

export default function NewsPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])

    const [filter, setFilter] = useState("");
    const news = useSelector(state => state.news.news);

    const handleChange = e => {
        setFilter(e.target.value);
    }

    const handleXclick = () => {
        setFilter('');
    };

    const newsToRender = newsFilter(news, filter);

    return (
        <Container>
             <Title value={'News'} />
                <Search
                handleChange={handleChange}
                handleClick={handleXclick}
                value={filter}
                />
                {newsToRender.length !== 0 && <NewsList news = {newsToRender}/>}
        </Container>
    )
}