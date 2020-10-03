import React, { useState, useEffect} from 'react';
import './App.css';
import ToDoList from './components/ToDoList'
import Form from './components/Form'
import Clear from './components/clear'

function App() {
  //States
  const [inputText, setinputText] = useState('');
  const [todoList, settodoList] = useState([]);
  const [filteredTodo, setfilteredTodo] = useState([]);
  const [status, setstatus] = useState('all');
  const [error, seterror] = useState(false);
  //useEffect
  useEffect(() => {
    filterchange();
  }, [status, todoList])
  //Functions
  const filterchange = () => {
    switch(status) {
      case 'completed': setfilteredTodo(todoList.filter( item => item.completed===true ));
        break;
      case 'uncompleted':  setfilteredTodo(todoList.filter( item => item.completed===false ));
        break;
      default : setfilteredTodo(todoList.map( item => item ));
    }
  }

  //Return
  return (
    <div className="whole-wrapper">
        <Form inputText={inputText} setinputText={setinputText} todoList={todoList} settodoList={settodoList} status={status} setstatus={setstatus} error={error} seterror={seterror}/>
        <ToDoList todoList={todoList} settodoList={settodoList} filteredTodo={filteredTodo}/>
        <Clear inputText={inputText} setinputText={setinputText} todoList={todoList} settodoList={settodoList} status={status} setstatus={setstatus} error={error} seterror={seterror} setfilteredTodo={setfilteredTodo}/>
    </div>
  );
}

export default App;
