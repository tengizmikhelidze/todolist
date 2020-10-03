import React from 'react'
import ToDo from './ToDo'
const ToDoList =({todoList, settodoList,filteredTodo}) =>{
    return(
        <div className="todo-list">
            <ul className="todo-ul">
                {filteredTodo.map( (todo) => <ToDo  todoList={todoList} settodoList={settodoList} todo={todo} key={todo.id} /> )}    
            </ul>
        </div>
    )
}

export default ToDoList;