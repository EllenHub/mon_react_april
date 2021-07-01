import {useState} from "react";
import {getUserPosts} from "../services/Api";
import UserPost from "./UserPost";

export default function User({item}) {
let [ toggle, setTggle] = useState(false)
    let [usersPosts, setUserPosts] = useState([])
    let buttonName = toggle ? 'hide': 'show'
     const click =() => {
    setTggle(!toggle)
         getUserPosts(item.id).then(({data}) => {
             setUserPosts(data)
         })

    }

    return (
        <div>
            <h3>{item.id} {item.name}  <button onClick={click}> {buttonName}</button></h3>
            {
                toggle && usersPosts.map(value => <UserPost item ={value}/>)

            }        </div>
)
}
