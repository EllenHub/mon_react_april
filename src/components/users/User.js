import {useState} from "react";
import Posts from "../posts/Posts";

export default function User({id, name}) {


    let [toggle, setToggle] = useState(false)

    let buttonName = toggle ? 'hide': 'show'
     const click = () => setToggle(!toggle)



    return (
        <div>
            <h2>{id}. {name}<button onClick={click}> {buttonName}</button></h2>

            {toggle && <Posts id = {id}/> }
            <hr/>
        </div>
)
}
