import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import CreateTodosForm from "./Componens/createTodo/CreateTodosForm";

import Todos from "./Componens/todos/Todos";

export default function App() {

import './App.css';

import Users from "./comps/users/Users";
import Posts from "./comps/posts/Posts";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {

  return (
      <Router>
          <div className="App">
              <div><Link to="/users"> users page</Link></div>
              <div><Link to="/posts"> posts page</Link></div>

              <Switch>
                  <Route path ={'/users'} component = {Users} />
                  <Route path ={'/posts'} component = {Posts} />


              </Switch>
          </div>

          {/*<div className="App">*/}
          {/*    <Users/>*/}
          {/*    <Posts/>*/}
          {/*</div>*/}
      </Router>
  );
}

export default App;
