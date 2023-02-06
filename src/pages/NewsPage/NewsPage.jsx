import React from "react";
import NewsList from "../../components/News/NewsList/NewsList";
import {Search} from "../../components/baseComponents/Search/Search";
import { useState, useEffect } from "react";
import {Container, Header} from "./NewsPage.styled"
import fetchNews from "../../services/news/fetchNews"

export default function NewsPage() {
    const [news, setNews] = useState([]);
    const [value, setValue] = useState("");

    useEffect(()=> {
        fetchNews().then(response => {
            setNews(response);
        })
    }, [])
    
    const handleChange = e => {
        setValue(e.target.value);
    }

    const handleClick = () => {
        setValue("")
    }

    const getFilteredNews = () => {
        if(!value) {
        return news;
        } 
            const normalizedFilter = value.toLowerCase().trim();
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
            <Search handleChange={handleChange} handleClick={handleClick} value={value}/>
                {news.length !== 0 && (
                <NewsList 
                    news = {getFilteredNews()}
                />)
                }
        </Container>
    )
}