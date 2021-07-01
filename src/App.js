import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Users from "./comp/users/Users";
import Posts from "./comp/posts/Posts";
import Comments from "./comp/comments/Comments";

export default function App() {
    return (
        <Router>
            <div>
                <div><Link to={"/users"}> USERS PAGE</Link></div>
                <div><Link to={"/posts"}> POSTS PAGE</Link></div>
                <div><Link to={"/comments"}> COMMENTS PAGE</Link></div>
                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/users'} component={Comments}/>
                </Switch>
            </div>
        </Router>

)
}
