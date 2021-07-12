import {LOADING_TRUE, PUSH_TODO,
ADD_TODOS, LOADING_FALSE} from "../actionTypes";

const initialState = {
    todos: [],
    todosLoading: false

}

export const todosReducer =(state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        
        case ADD_TODOS: {
            return {...state, todos: action.payload}
        }
        case LOADING_TRUE: {
            return {...state, todosLoading: true}
        }
        case LOADING_FALSE: {
            return {...state, todosLoading: false}
        }
        case PUSH_TODO: {
            return {...state, todos: [...state.todos, action.payload]}
        }

        case 'DELETE_TODO': {
            return {...state, todos: [...state.todos.filter(value => value.id !==action.payload)]}
        }
        case 'COMPLETE_TODO': {
          const find = state.todos.find(val => val.id === action.id)
         find.completed = !find.completed

            return {...state, completed: find}
        }
        default:
            return state
    }
}