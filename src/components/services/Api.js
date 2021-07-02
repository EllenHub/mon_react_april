import axios from "axios";
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const getUsers = () => axiosInstance('users')
const getUser = (id) => axiosInstance('users/' + id)
const getUserDetails = (id) => axiosInstance('users/' + id + '/posts')

export {getUser,getUsers, getUserDetails}