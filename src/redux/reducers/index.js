import {counterReducer} from "./counter";
import{todosReducer} from "./todo";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    counterReducer,
    todosReducer
})