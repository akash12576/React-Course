import React, { useState } from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts/TodoContext.js'

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState
    (false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }


  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-white/50 duration-300 text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
        <input type="checkbox" 
        className='curdor-pointer'
        checked={todo.completed}
        onChange={toggleCompleted}
        />
        <input type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        />
    </div>
  )
}

export default TodoItem