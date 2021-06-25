// const getUsers = () => {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
// };
// const getUser  = (id)=> {
//     return fetch('https://jsonplaceholder.typicode.com/users/' + id)
//         .then(response => response.json());
// };
//
// export {getUser, getUsers};


import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

const getPosts = () => axiosInstance()
const getPost = (id) => axiosInstance('/' + id)

export { getPost, getPosts}