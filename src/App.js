
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Users from "./comp/users/Users";
import Posts from "./comp/posts/Posts";
import Comments from "./comp/comments/Comments";

export default function App() {
    return (
        <Router>
            <div>
                <div><Link to ={"/"}> home </Link></div>
                <div><Link to = "/users"> User page</Link></div>
                <div><Link to = "/posts"> Posts page</Link></div>
                <div><Link to = "/comments"> Comments page</Link></div>
            </div>
            <Switch>
                <Route path={'/users'} component={Users}/>
                <Route path = {'/posts'}   render={(props) => <Posts {...props}/>}/>
                <Route path={'/comments'} component={Comments}/>
                <Route path ={'/'} render={() => <div> HOME</div>} />
            </Switch>
        </Router>
)
}

