import { createSelector } from "@reduxjs/toolkit";

export const selectNews = state => state.news.items;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.news.isLoading;

export const selectError = state => state.news.error;


// мемоизация
export const selectVisibleContacts = createSelector([selectNews, selectFilter], (news, filterName) => {
    console.log("fdgfdfgd")

    const normalizedFilter = filterName.toLowerCase();

    return news.filter(contact => 
        contact.name.toLowerCase().includes(normalizedFilter),
    );
})