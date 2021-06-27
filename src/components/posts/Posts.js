import {useEffect, useState} from "react";
import {getPosts} from "../services/Service";
import Post from "./Post";

export default function Posts({id}) {
    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(({data}) => {
            setPosts(data)
        })
    }, [])

    const filter = posts.filter(value => value.userId === id)
    return (
        <div>
            {
                filter.map(value => <Post key = {value.id} id = {value.id} title = {value.title}/>)
            }
        </div>
)
}

