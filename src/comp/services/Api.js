import axios from "axios"
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const getUsers = () => axiosInstance('users')
const getPosts = () => axiosInstance('posts')
const getUser = (id) => axiosInstance('users/' + id)
const getPost = (id) => axiosInstance('posts/' + id)

export {getUsers, getPosts, getUser,getPost}