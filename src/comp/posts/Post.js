import {useState} from "react";
import Comments from "../comments/Comments";

export default function Post({item}) {
    // let [toggle, setToggle] = useState(false)
    //
    // let buttonName = toggle? 'hide': 'show'
    // const click  =  () => setToggle(!toggle)
    return (
        <div>
            <h4>{item.id} {item.title}
            </h4>
            {/*{*/}
            {/*    toggle && <Comments id = {item.id}/>*/}
            {/*}*/}
        </div>
)
}
