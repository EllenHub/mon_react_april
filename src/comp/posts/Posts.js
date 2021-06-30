import {useEffect, useState} from "react";
import {getPosts} from "../services/Api";
import Post from "./Post";
import Comment from "../comments/Comment";

export default function Posts({items, id}) {
    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(({data}) => {
            setPosts(data)
        })
    },[])


    const filter = posts.filter(value => value.userId === id)
    return (
        <div>
            {
                filter.map(value => <Post key = {value.id} item = {value} />)
            }

        </div>
)
}
