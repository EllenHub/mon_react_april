import {useEffect, useState} from "react";
import {getUsers} from "../services/Service";
import User from "./User";

export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(({data}) => {
            setUsers(data)
        })
    },[])
    return (
        <div>
            {
                users.map(value => <User key = {value.id} id={ value.id} name ={value.name}/>)
            }
        </div>
)
}
