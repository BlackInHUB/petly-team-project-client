import React from "react";
import NewsList from "../../components/News/NewsList/NewsList";
import {Search} from "../../components/baseComponents/Search/Search";
import { useEffect, useState } from "react";
import {Container, Header} from "./NewsPage.styled"
// import getNews from "../../redux/news/news/news-operations";
import fetchNews from "services/news/fetchNews";


import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from '../../redux/news/newsFilter';

export default function NewsPage() {
     // const [value, setValue] = useState("");
    // const news = useSelector(store => store.news);
    // console.log(typeof(news))

    const [news, setNews] = useState([]);

    const dispatch = useDispatch();
    const {filter} = useSelector(store => store.newsFilter);
    console.log(filter)

    useEffect(()=> {
        fetchNews().then(response => {
            setNews(response);
        })
    }, [])

    // useEffect(() => {
    //     dispatch(getNews());
    // }, [dispatch]);

    const onSetFilter = (e) => {
        dispatch(setFilter(e.target.value));
    };
    
    // const handleChange = e => {
    //     setValue(e.target.value);
    // }

    const handleX = (e) => {
        dispatch(setFilter(""));
    }

    const getFilteredNews = () => {
        if(!filter) {
        return news;
        } 
            const normalizedFilter = filter.toLowerCase().trim();
            const filteredNews = news.filter(({title}) => {
                const normalizedTitle = title.toLowerCase().trim();
                const result = normalizedTitle.includes(normalizedFilter);
            return result;
            })
        return filteredNews;
    }

    return (
        <Container>
             <Header>News</Header>
            <Search handleChange={onSetFilter} handleClick={handleX} value={filter}/>
                {news.length !== 0 && (
                <NewsList 
                    news = {getFilteredNews()}
                />)
                }
        </Container>
    )
}