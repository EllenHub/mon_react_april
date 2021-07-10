import React, {Fragment} from "react";

export default function Todos({todos, isLoading}) {

    if (isLoading ) return <h2>LOADING...</h2>

    return (
        <div>
            {todos.map(todo => (
                <Fragment key={todo.id}>
                    <hr/>
                    <div> Title: {todo.title}</div>
                    <div> Description: {todo.description}</div>
                    <div> Created At: {new Date(todo.createdAt).toDateString()}</div>
                    <div> Status: {todo.completed.toString()}</div>

                </Fragment>
            ))}
        </div>
    )
}
