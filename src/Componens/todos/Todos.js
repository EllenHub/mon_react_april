import React, {Fragment} from 'react';
import './Todos.css'
export default function Todos({todos, isLoading, deleteTodo, completeTodo}) {
if (isLoading) return <h2> LOADING ...</h2>



    return (
        <div className='todos-list'>
            <hr/>
            {
                todos.map(todo => (
                <Fragment key={todo.id}>
                    <div className= 'wrapper'>
                        <div className='list'>
                            <h4> Title: {todo.title}</h4>
                            <hr/>
                            <h4>Description: {todo.description}</h4>
                            <hr/>
                            <h4>Created At:{new Date(todo.createdAt).toDateString()}</h4>
                            <hr/>
                            <h4>Status: {todo.completed.toString()}</h4></div>
                        <div className='btn-s'>
                            <button className='btn delete' onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button className='btn complete'
                                    onClick={() => completeTodo( todo.id, todo.completed)}>Complete</button>
                    </div>
                    </div>


                    <hr/>
                </Fragment>
                ))
            }

        </div>
    )
}
