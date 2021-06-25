import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {getUsers, getUser} from "./components/services/Api";
import Users1 from "./components/users1/Users1";
import UserDetails from "./components/users1/UserDetails";

// import Users1 from "./components/users/Users1";

export default function App() {
    let [users, setUsers] = useState([])
  let [userDetails, setUserDetails] = useState(null)
    useEffect( () => {
        getUsers().then (response => {
         setUsers(response.data)
        })
    },[])
 function selectUsers(id) {
        console.log(id)
        getUser(id).then(({data}) => {
            setUserDetails(data)

        })
 }
    return (
        <div>
            <Users1 items = {users} selectUsers = {selectUsers}/>
            <hr/>
            {
                userDetails && <UserDetails item={userDetails}/>
            }
        </div>
)
}





