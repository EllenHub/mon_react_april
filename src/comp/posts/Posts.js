import {useEffect, useState} from "react";
import {getPosts} from "../services/Api";
import Post from "./Post";

export default function Posts() {
    let [posts, setPost] = useState([])
    useEffect(() => {
        getPosts().then(({data}) => {
            setPost(data)
        })
    },[])
    return (
        <div>
            {
                posts.map(value => <Post key = {value.id} item = {value}/>)
            }
        </div>
)
}
