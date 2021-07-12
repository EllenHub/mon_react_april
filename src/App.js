import {useDispatch, useSelector} from "react-redux";
import CreateTodosForm from "./Componens/createTodo/CreateTodosForm";
import {useEffect} from "react";
import {todosReducer} from "./redux/reducers/todo";
import Todos from "./Componens/todos/Todos";
import './App.css'
import {setAddTodos, setLoadingTrue, setLoadingFalse, setPushTodos} from "./redux/actionCreators";
import {PUSH_TODO} from "./redux/actionTypes";

export default function App()  {

    const {todos, todosLoading} =useSelector(store => store.todosReducer)
    const dispatch = useDispatch()

    const fetchForm = async() => {

        try {
            dispatch(setLoadingTrue())
            const resp = await fetch('http://localhost:8888/get-todos')
            const data = await resp.json()
            dispatch(setAddTodos(data))

        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoadingFalse())
        }
    }
    useEffect(() => {
        fetchForm()
    }, [])

const onTodoForm = async (title, description) => {
        if (!title || !description) return;
        
        const resp =await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }

        })
    const data = await resp.json()
    dispatch(setPushTodos(data))
}

const deleteTodo = async(id) => {
        const resp = await fetch('http://localhost:8888/delete-todo/'+ id,{
            method:'DELETE',
        })
    await resp.json()
    dispatch({type: 'DELETE_TODO', payload: id})
}

const completeTodo =async(id, completed) => {
        console.log(id, completed);
        const resp = await fetch('http://localhost:8888/update-todo/'+ id, {
            method: 'PATCH',
            body: JSON.stringify( {completed: !completed}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
     const data = await resp.json()

    dispatch({type: 'COMPLETE_TODO', id, data})

}
    return (
        <div className='App'>
           <CreateTodosForm onSubmit = {onTodoForm} />
            <Todos todos = {todos} isLoading={todosLoading} deleteTodo = {deleteTodo} completeTodo ={completeTodo}/>
        </div>
)
}
