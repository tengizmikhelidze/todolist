import React from 'react' 

const ToDo =({todoList, settodoList, todo})=>{
    const checkbtn = (e) =>{
        e.preventDefault();
        settodoList(todoList.map( item => item.id === todo.id ? {...item, completed : !item.completed} : {...item} ));
        
    }
    const deletebtn = (e) =>{
        e.preventDefault();
        settodoList( todoList.filter( item => item.id !== todo.id ) );
    }
    return(
        <div className="todo-li">
            <li className={`li-item ${todo.completed ? 'completed':''}`}>
                {todo.text} 
            </li>
            <div className="li-btns">
                <button className="check-btn" onClick={checkbtn}> <i className="fas fa-check-square"></i> </button>
                <button className="delete-btn" onClick={deletebtn}> <i className="fas fa-trash-alt"></i> </button>
            </div>
        </div>
    )
}

export default ToDo;