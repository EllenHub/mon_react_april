import {Link} from "react-router-dom";

export default function Post({item}) {
    return (
        <div>
            {item.id} {item.title} - <Link to={'/posts/' + item.id }> details</Link>
            {/*{item.id} {item.name} - <Link to={*/}
            {/*    {pathname: '/users/' + item.id, state: item}*/}
            {/*}> details</Link>*/}

        </div>
    )
}
