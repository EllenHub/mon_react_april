import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";

export default function Posts() {

    const posts = useSelector(({posts}) => posts)
    const dispatch =useDispatch()

    const fetchPost = async () => {
        const data = await (await fetch ('https://jsonplaceholder.typicode.com/posts')).json()

        dispatch({type: 'SET_POSTS', payload: data})
    }

    useEffect(() => {
        fetchPost()
    }, [])
    return (
        <div>
            {
                posts.map(val => (<div key = {val.id}>
                    <br/>
                    <p>{val.id}.{val.title}</p>

                </div>))
            }
        </div>
)
}
