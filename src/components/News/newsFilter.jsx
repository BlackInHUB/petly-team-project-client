export const newsFilter = (news, filter) => {
    const normalizer = (value) => {
        return value.trim().toLowerCase()
    };

    if (filter === '') {
        return news;
    };

    const filteredData = news.filter(item => normalizer(item.title).includes(normalizer(filter)));
    return filteredData;
};
