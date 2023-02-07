import { instance } from "./auth";

const fetchFriends = async () => {
    try {
        const {data} = await instance.get('/friends')
        return data
    } catch (error) {
        console.log(error);
    };
};

const api = {
    fetchFriends,
};

export default api