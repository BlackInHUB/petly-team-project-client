import axios from "axios";

export default async function fetchNews() {
    const url = "https://petly.onrender.com/api/news";
        const response = await axios.get(url).catch(err => {
            console.log(err)
        });
        return response.data;
};