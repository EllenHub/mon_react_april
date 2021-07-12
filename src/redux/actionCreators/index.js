import {LOADING_TRUE, PUSH_TODO,
    ADD_TODOS, LOADING_FALSE,} from "../actionTypes";

export const setAddTodos = (payload) => ({type:ADD_TODOS, payload});
export const setLoadingTrue = () => ({type: LOADING_TRUE});
export const setLoadingFalse = () => ({type: LOADING_FALSE});
export const setPushTodos = (payload) => ({type: PUSH_TODO, payload});
