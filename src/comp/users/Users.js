import {useEffect, useState} from "react";
import {getUsers} from "../services/Api";
import User from "./User";
import {Route} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";
import UserDetail2 from "../user-details/UserDetail2";
import UserPostDetail from "../user-details/UserPostDetail";

export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(({data}) => {
            setUsers(data)
        })
    }, [])
    return (

        <div>
            {
                users.map(value => <User key = {value.id} item = {value}/>)
            }
            <hr/>
            {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
            {/*<Route path={'/users/:id'} component={UserDetail2}/>*/}
            <Route path={'/users/:id'} component={UserPostDetail}/>
        </div>
)
}
