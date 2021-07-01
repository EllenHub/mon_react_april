import {useEffect, useState} from "react";
import {getPost, getPosts, getUsers} from "../services/Api";
import User from "../users/User";
import {Route} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";
import Post from "./Post";
import PostDetail from "./PostDetail";

export default function Users() {
    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(({data}) => {
            setPosts(data)
        })
    })
    return (

        <div>
            {
                posts.map(value => <Post key = {value.id} item = {value}/>)
            }
            <Route path={'/posts/:id'} component={PostDetail}/>
            {/*<Route path={'/users/:id'} component={UserDetail2}/>*/}
        </div>
    )
}
