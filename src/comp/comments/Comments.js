import {useEffect, useState} from "react";
import {getComments} from "../services/Api";
import Comment from "./Comment";

export default function Comments() {

    let [comments, setComments] =useState([])
    useEffect(() => {
        getComments().then(({data}) => {
            setComments(data)
        })
    }, [])
    return (
        <div>
            {
                comments.map(value => <Comment key = {value.id} item={value} />)
            }
        </div>
)
}
