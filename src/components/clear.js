import React from 'react';

const Clear = ({setinputText,settodoList, setstatus,seterror, setfilteredTodo}) => {
    const clearHandler = () => {
        setinputText('');
        settodoList([]);
        setstatus('all');
        setstatus(false);
        setfilteredTodo([]);
    }
    return (
        <div className="clear">
            <button className="clearBtn" type="submit" onClick={clearHandler}>
                Clear All
            </button>
        </div>
    ) 
}

export default Clear