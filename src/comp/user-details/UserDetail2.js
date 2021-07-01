import {useEffect, useState} from "react";

export default function UserDetail2(props) {
    console.log(props.location.state);
    let {location: {state}} = props
    let [user, setUser] =useState({})
    useEffect(() => {
        setUser({...state})

    },[state])

    return (
        <div>
            {user.username}
        </div>
)
}
