export default function Post({item, selectPost}) {
    return (
        <div>
            {item.id} - {item.body} <button onClick={() => {
                selectPost(item.id)
            }
        }> click me</button>
        </div>
)
}
