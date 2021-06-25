import Post from "./Post";

export default function Posts({items, selectPost}) {
    return (
        <div>
            {
                items.map(p => <Post item = {p} selectPost = {selectPost}/>)
            }
        </div>
)
}


