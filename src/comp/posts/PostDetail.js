import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPost} from "../services/Api";

export default function PostDetail(props) {
    let {match:{params: {id}}} = props
    let [post, setPost] = useState({})
    useEffect(() => {
        getPost(id).then(value => setPost({...value.data}))
    }, [id])

    return (
        <div>
            {post.id} {post.title}
        </div>
    )
}
