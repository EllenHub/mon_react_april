import {useState} from "react";
import Posts from "../posts/Posts";

export default function User({item}) {

    let [toggle, setToggle] = useState(false)

    let buttonName = toggle? 'hide': 'show'
    const click  =  () => setToggle(!toggle)
    return (
        <div>
            <h3>{item.id} {item.name} <button onClick={click} >{buttonName} </button></h3>

            {
                toggle && <Posts id = {item.id}/>
            }
        </div>
)
}
