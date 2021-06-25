export default function User({item, selectUsers}) {
    return (
        <div>
            {item.id}  - {item.name} <button onClick={()=> {
                selectUsers(item.id)
            }
        }>click me</button>

        </div>
)
}

