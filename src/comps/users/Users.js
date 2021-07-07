import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";



export default function Users() {
    const users = useSelector(({users}) =>users)

    const dispatch = useDispatch()

    const fetchUsers = async () => {
        const data = await(await fetch ('https://jsonplaceholder.typicode.com/users')).json()
        dispatch({type: 'SET_USERS',payload: data})
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            {
                users.map(val => (<div>
                <p> {val.id}.{val.name} </p>
            </div>))}

        </div>
)
}
