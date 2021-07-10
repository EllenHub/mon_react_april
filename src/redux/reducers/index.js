import {combineReducers} from "redux";
import {counterReducer} from "./counter";
import {todosReducer} from "./todo";

export const rootReducer = combineReducers({
    counterReducer,
    todosReducer
})
