import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Users from "./components/users/Users";
import './App.css'

export default function App() {
    return (
        <Router>
            <div className='body'>

                <div className='main'> <Link to  = {'/users'}> users page</Link></div>
                <div className='main'> <Link to  = {'/posts'}> posts page</Link></div>

                <Switch>
                    <Route path={'/users'} component={Users}/>
                </Switch>
            </div>
        </Router>
)
}
