import React from 'react';

const ToDoItem = props => {
    return (
        <li className={props.element.isDone ? 'done' : 'notDone'} id={"element" + props.element.id}>
            <div><span onClick={() => props.editTask(props.element.id)}>Edytuj</span> | <span onClick={() => props.deleteTask(props.element.id)}>Usuń</span></div>
            {!props.element.editing ? <h2>{props.element.title}</h2> : <input type="text" id="editInput"></input>}
            <button onClick={() => props.changeState(props.element.id)}>Zmień stan</button>
        </li>
    )
}

export default ToDoItem;