import React, { useState } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState("")


   const handleSubmit = (e) => {
      e.preventDefault();
      props.addTodo(input)
      setInput("")
 }

  return (
    <form className='todo-form'  onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Add a todo"
        className="todo-input"
        onChange={(e) => setInput(e.target.value)} />

      <button type="submit" className="todo-button">Add Todo</button>
    </form>
  )
}

export default TodoForm;