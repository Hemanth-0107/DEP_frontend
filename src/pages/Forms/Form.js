import React from "react";
import {v4 as uuidv4} from "uuid";

const Form =({input,setInput,todos,setTodos})=>{
    const onInputChange=(event)=>{
        setInput(event.target.value);
    }
    const onFormSubmit=(event)=>{
       event.preventDefault();
       setTodos(...todos,{id:uuidv4(), title:input, completed:false});
       setInput("");
    }

    return (
        <div className="auth-form-container">
        <form onSubmit={onFormSubmit} className="todo-form">
        <input 
            type="text"
            placeholder="Enter a todo..."
            className="task-input"
            value={input}
            required
            onChange = {onInputChange}
        />
        <button  type="submit" className="hero">Add</button>
        </form>
        </div>
    )
}

export default Form;