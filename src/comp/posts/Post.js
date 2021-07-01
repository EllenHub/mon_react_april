import {useState} from "react";
import {getPostComments} from "../services/Api";
import PostComments from "./PostComments";

export default function Post({item}) {
    let [toggle, setToggle] = useState(false)
    let [ postComments, setPostComments] = useState([])
    let buttonName = toggle? 'hide': 'show'

    const click = () => {
        setToggle(!toggle)
        getPostComments(item.id).then(({data}) => {
            setPostComments(data)
        })
    }

    return (
        <div>
            <h4>{item.id} .{item.title} <button onClick={click}> {buttonName}</button></h4>
            {
                toggle && postComments.map(value => <PostComments key = {value.id} item = {value} /> )
            }
        </div>
)
}

