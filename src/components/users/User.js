import {Link, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserDetails} from "../services/Api";
import UsersDetails from "./UsersDetails";

export default function User({item}) {
    return (
        <div>
            {item.id} {item.name} <Link to = {'/users/' + item.id + '/posts'}> details</Link>


            <Route path={'/users/' + item.id + '/posts'} render={()=><UsersDetails id = {item.id}/>}/>

            </div>
)
}
