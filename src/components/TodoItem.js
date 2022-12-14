import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"

const TodoItem = (props) => {
  const { todo, removeTodo, completeTodo } = props 
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
        {props.todo.text}
        <div className="iconsContainer">
            <RiCloseCircleLine className="icon" style={{marginRight: "5px"}} onClick={() => removeTodo(todo.id)} />
            <BiCheckCircle className="icon" onClick={() => completeTodo(todo.id)} />
        </div>
       
    </div>
  )
}

export default TodoItem;