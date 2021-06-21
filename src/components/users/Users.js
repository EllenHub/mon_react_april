import {useEffect, useState} from "react";
import './Users.css'

export default function Users() {

    let [postState, setPostState] = useState([])
    // let state = useState([])
    // let postState = state[0];
    // let setPostState = state[1]

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => {
                console.log(value);
                setPostState(value);
            });
    },[])


    return (
        <div >
            {
            postState.map(value => <div>
                <div className={'point'}>{value.id} - {value.title}</div>
            </div>)
            }

        </div>
)
}
