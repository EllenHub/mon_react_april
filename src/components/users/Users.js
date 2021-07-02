import {useEffect, useState} from "react";
import {getUsers} from "../services/Api";
import User from "./User";
import {Route} from "react-router-dom";
import UsersDetails from "./UsersDetails";

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
            {/*<Route path={'/users/:id/posts'} component={UsersDetails}/>*/}

        </div>
)
}
