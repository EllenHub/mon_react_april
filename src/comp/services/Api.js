import axios from "axios"
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})
const getUsers = () => axiosInstance('users')
const getPosts = () => axiosInstance('posts')
const getComments = () => axiosInstance('comments')
const getUserPosts =(id) => axiosInstance('users/' + id + '/posts')
const getPostComments =(id) => axiosInstance('posts/' + id + '/comments')


export {getUsers, getPosts, getComments, getUserPosts,getPostComments}