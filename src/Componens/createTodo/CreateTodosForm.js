import {useState} from "react";
import './CreateForm.css'

export default function CreateTodosForm({onSubmit}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title || !description || isLoading) return;
        try {
            setIsLoading(true)
            await onSubmit(title,description)
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='CreateForm'>
            <h1> Create your TODO</h1>
            <form onSubmit={handleSubmit}>
                <br/>
              <br/>
                <input type="text"
                       value={title} onChange={({target: {value}})=> setTitle(value)} placeholder="Title"/>
                <br/>
                <br/>
                <input type="text" value={description}
                       onChange={({target: {value}})=> setDescription(value)} placeholder="Description"/>
                <br/>
                <br/>
                <button className='create-btn' type="submit" disabled={ !title || !description || isLoading}> Create</button>
            </form>
        </div>
)
}
