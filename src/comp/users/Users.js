import {useEffect, useState} from "react";
import {getUsers} from "../services/Api";
import User from "./User";
import {Route} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";
import UserDetail2 from "../user-details/UserDetail2";

export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(({data}) => {
            setUsers(data)
        })
    })
    return (

        <div>
            {
                users.map(value => <User key = {value.id} item = {value}/>)
            }
            <Route path={'/users/:id'} component={UserDetails}/>
            {/*<Route path={'/users/:id'} component={UserDetail2}/>*/}
        </div>
)
}
