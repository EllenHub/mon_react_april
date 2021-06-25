import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import PostDetails from "./components/users1/PostDetails";
import Posts from "./components/users1/Posts";
import {getPost, getPosts} from "./components/services/Api";


export default function App() {

    let [posts, setPosts] = useState([])
    let [postDetails, setPostDetails] = useState(null)
    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data)
        } )
    },[])
    function selectPost(id) {
        console.log(id)
        getPost(id).then(({data}) =>
        setPostDetails (data))
    }
    return (
        <div>
            <Posts items = {posts} selectPost = {selectPost}/>
            <hr/>

            {
                postDetails && <PostDetails item = {postDetails}/>
            }
        </div>
)
}





