const baseURL = `https://petly.onrender.com/api/friends`;

function fetchFriends(){
    return (
        fetch(`${baseURL}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(new Error(`Не верный ${baseURL}`))
        })
    )
}

const api = {
    fetchFriends,
};

export default api