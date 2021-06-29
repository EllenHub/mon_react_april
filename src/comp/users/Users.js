import {useEffect, useState} from "react";
import {getUsers} from "../services/Api";
import User from "./User";

export default function Users(props) {

    let [users, setUers] = useState([])
    useEffect(() => {
        getUsers().then(({data})=> {
            setUers(data)
        })
    },[])
    return (
        <div>
            {users.map (value => <User key = {value.id} item = {value}/>)}
        </div>
)
}
