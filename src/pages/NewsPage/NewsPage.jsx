import React from "react";
import NewsList from "./NewsList";
import Search from "./Search";
import { useState, useEffect } from "react";
import axios from "axios";
import {Container} from "./NewsPage.styled"

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchNews = async() => {
      try {
          const result = await axios.get("https://petly.onrender.com/api/news");
          setNews(result.data);
      } catch (err) {
          console.log(err)
      }
  };

  useEffect(()=> {
      fetchNews();
  }, [])

  const handleChange = e => {
      setFilter(e.target.value);
  }

  const getFilteredNews = () => {
      if(!filter) {
      return news;
      } 
          const normalizedFilter = filter.toLowerCase();
          const filteredNews = news.filter(({title}) => {
              const normalizedTitle = title.toLowerCase();
              const result = normalizedTitle.includes(normalizedFilter);
          return result;
          })
// ——setNews(filteredNews)—- 
      return filteredNews;
  }

  return (
      <Container>
          <Search onChange={handleChange} value={filter} />
              {news.length !== 0 && (
              <NewsList 
                  news = {getFilteredNews()}
              />)
              }
      </Container>
  )
}