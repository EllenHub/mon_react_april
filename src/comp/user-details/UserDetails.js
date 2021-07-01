import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUser} from "../services/Api";
export default function UserDetails(props) {
  let {match:{params: {id}}} = props
    let [user, setUser] = useState({})
    useEffect(() => {
        getUser(id).then(value => setUser({...value.data}))
    }, [id])

    return (
        <div>
            {user.id} {user.name}

        </div>
)
}
