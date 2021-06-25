import User from "./User";

export default function Users1({items, selectUsers}) {
    return (
        <div>
            {
                items.map(u => <User  key = {u.id} item = {u} selectUsers ={selectUsers}/>)
            }
        </div>
)
}

