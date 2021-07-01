import {useEffect, useState} from "react";
import {getUserPosts} from "../services/Api";
import UserPost from "./UserPost";

export default function UserPostDetail(props) {
    let {match:{params:{id}}} = props
    let [posts, setPosts] = useState([])
    console.log(props);
    useEffect(() => {
        getUserPosts(id).then(value => setPosts([...value.data]))
    },[id])

    return (
        <div>
            {
                posts.map(value => <UserPost item = {value}/>)
            }
        </div>
)
}
