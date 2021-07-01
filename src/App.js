import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./comp/users/Users";
import Posts from "./comp/posts/Posts";


export default function App() {
    return (
        <Router>
            <div>
                <div><Link to = {'/users'}> users page</Link></div>
                <div><Link to = {'/posts'}> posts page</Link></div>

                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                </Switch>

            </div>
        </Router>
)
}
