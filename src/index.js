import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    users: [],
    posts: []
}

const reducer = (state =initialState,action)=>{
    switch(action.type) {

        case 'SET_USERS': {
            return {...state, users: action.payload}
        }
        case 'SET_POSTS': {
            return {...state, posts: action.payload}
        }
        default:
            return state

    }
}
const store = createStore(reducer)
ReactDOM.render(

  <React.StrictMode>

      <Provider store={store}>
          <App/>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
