import React from 'react'
var counter =0;
const Form =({inputText, setinputText, todoList,settodoList, status, setstatus, error, seterror})=>{

    const changeTextHandler = (e) => {
        e.preventDefault();
        setinputText(e.target.value);
    }

    const plusHandler = (e) => {
        e.preventDefault();
        if(inputText == ""){
            seterror(true);
            document.getElementById('input').placeholder = "Invalid Item"
        } else {
            seterror(false);
            document.getElementById('input').placeholder = "Enter Item"
            settodoList([...todoList, {text:inputText, completed: false, id:counter++}]);
            setinputText('');
        }
    }

    const selectHandler = (e) => {
        setstatus(e.target.value);
    }

    return(
        <div>
            <form className="input-form">
            <div className={`input ${error===true ? 'error' : ''}`}>
                <input id="input" type="text" placeholder="Enter item" onChange={changeTextHandler} value={inputText}/>
                <button className="plus-btn" type="submit" onClick={plusHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
            <select name="filter-todos" id="filter-todos" onChange={selectHandler}>
                <option value="all" defaultValue>all</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
            </form>
        </div>
    )
    
}

export default Form;