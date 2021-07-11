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
        console.log(JSON.stringify({title, description}));
        
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

    return (
        <div className='App'>
           <CreateTodosForm onSubmit = {onTodoForm} />
            <Todos todos = {todos} isLoading={todosLoading} />
        </div>
)
}

