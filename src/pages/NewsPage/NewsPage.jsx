// import React from "react";
// import NewsList from "../../components/News/NewsList/NewsList";
// import Search from "../../components/News/Search/Search";
// import { useState, useEffect } from "react";
// import {Container, Header} from "./NewsPage.styled"
// import fetchNews from "../../services/news/fetchNews";

// // import getNews from "../../redux/news/news/news-operations";
// // import { useSelector, useDispatch } from 'react-redux';
// // import { setFilter } from '../../redux/news/newsFilter';

// export default function NewsPage() {
//      const [filter, setFilter] = useState("");
//     // const news = useSelector(store => store.news);
//     // console.log(typeof(news))

//     const [news, setNews] = useState([]);

//     // const dispatch = useDispatch();
//     // const {filter} = useSelector(store => store.newsFilter);
//     // console.log(filter)

//     useEffect(()=> {
//         fetchNews().then(response => {
//             setNews(response);
//         })
//     }, [])

//     // useEffect(() => {
//     //     dispatch(getNews());
//     // }, [dispatch]);

//     // const onSetFilter = (e) => {
//     //     dispatch(setFilter(e.target.value));
//     // };
    
//     const handleChange = e => {
//         setFilter(e.target.value);
//     }

//     const handleClick = e => {
//         setFilter("");
//     }

//     const getFilteredNews = () => {
//         if(!filter) {
//         return news;
//         } 
//             const normalizedFilter = filter.toLowerCase().trim();
//             const filteredNews = news.filter(({title}) => {
//                 const normalizedTitle = title.toLowerCase().trim();
//                 const result = normalizedTitle.includes(normalizedFilter);
//             return result;
//             })
//         return filteredNews;
//     }

//     return (
//         <Container>
//              <Header>News</Header>
//             <Search onChange={handleChange} value={filter} handleClick={handleClick}/>
//                 {news.length !== 0 && (
//                 <NewsList 
//                     news = {getFilteredNews()}
//                 />)
//                 }
//         </Container>
//     )
// }



import React from "react";
import NewsList from "../../components/News/NewsList/NewsList";
import {Search} from "../../components/News/Search/Search";
import { useEffect } from "react";
import { useState } from "react";
import {Container, Header} from "./NewsPage.styled";
import fetchNews from "../../services/news/fetchNews";

// import getNews from "../../redux/news/news/news-operations";

import { useSelector, useDispatch } from 'react-redux';

import { setNews } from '../../redux/news/news/news-slice';

export default function NewsPage() {

    const [newsFilter, setNewsFilter] = useState("");

 
     // const [value, setValue] = useState("");
    const {news} = useSelector(store => store.news);
    console.log(news)

    const dispatch = useDispatch();

    const getFilteredNews = () => {
        if(newsFilter === "") {
        return news;
        } 
            const normalizedFilter = newsFilter.toLowerCase().trim();
            const filteredNews = news.filter(({title}) => {
                const normalizedTitle = title.toLowerCase().trim();
                const result = normalizedTitle.includes(normalizedFilter);
            return result;
            })
            dispatch(setNews(filteredNews));
        // return filteredNews;
    }

    // useEffect(() => {
    //     dispatch(setNews(fetchNews()));
    // }, []);
    useEffect(()=> {
        fetchNews().then(response => {
            dispatch(setNews(response));
        })
    }, [])

    const handleChange = e => {
        setNewsFilter(e.target.value);
        getFilteredNews()
    }

    const handleX = () => {
        setNewsFilter("");
        fetchNews().then(response => {
            dispatch(setNews(response));
        })
    }

    return (
        <Container>
             <Header>News</Header>
            <Search onChange={handleChange} value={newsFilter} handleClick={handleX}/>
                {news.length !== 0 && (
                <NewsList 
                    news = {news}
                />)
                }
        </Container>
    )
}