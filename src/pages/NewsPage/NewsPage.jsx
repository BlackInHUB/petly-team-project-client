import React from "react";
import NewsList from "../../components/News/NewsList/NewsList";
import Search from "../../components/News/Search/Search";
import { useState, useEffect } from "react";
import {Container, Header} from "./NewsPage.styled"
import fetchNews from "../../services/news/fetchNews"

export default function NewsPage() {
    const [news, setNews] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(()=> {
        fetchNews().then(response => {
            setNews(response);
        })
    }, [])
    
    const handleChange = e => {
        setFilter(e.target.value);
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
            <Search onChange={handleChange} value={filter}/>
                {news.length !== 0 && (
                <NewsList 
                    news = {getFilteredNews()}
                />)
                }
        </Container>
    )
}