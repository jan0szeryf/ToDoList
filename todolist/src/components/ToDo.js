import React from 'react';
import ToDoItem from './ToDoItem';
import '../styles/ToDo.css';

let editing = false;

class ToDo extends React.Component {

    state = {
        elements: [
            {id: 1, title: 'nazwa1', isDone: false, editing: false},
            {id: 2, title: 'nazwa2', isDone: true, editing: false},
            {id: 3, title: 'nazwa3', isDone: false, editing: false}
        ]
    }

    addItem = () => {
        let index = 0;
        this.state.elements.forEach(element => {
            if(index <= element.id)
                index = element.id +1;
        });

        const newElement = { id: index, title: document.getElementById('addInput').value, isDone: false, editing: false };
        this.setState({elements: [newElement, ...this.state.elements]});
    }

    changeState = (i) => {
        const index = this.state.elements.findIndex(element => element.id === i);
        const newElements = this.state.elements;
        newElements[index].isDone = !newElements[index].isDone;

        this.setState({elements: newElements});
    }

    editTask = (i) => {
        const index = this.state.elements.findIndex(element => element.id === i);
        if(this.state.elements[index].isDone)
            return;
        if(!editing) {
            editing = !editing;
            const newElements = this.state.elements;
            newElements[index].editing = !newElements[index].editing;

            this.setState({elements: newElements});
        } else {
            editing = !editing;
            const newTitle = document.getElementById('editInput').value;
            const newElements = this.state.elements;
            newElements[index].title = newTitle;
            newElements[index].editing = !newElements[index].editing;

            this.setState({elements: newElements});
        }
    }

    deleteTask = (i) => {
        const index = this.state.elements.findIndex(element => element.id === i);
        let newElements = this.state.elements;
        newElements.splice(index, 1);

        this.setState({elements: newElements});
    }

    render() {
        const elements = this.state.elements.map(e => {
            return <ToDoItem element={e} changeState={this.changeState} editTask={this.editTask} deleteTask={this.deleteTask}/>
        });
        return (
            <div>
                <input type="text" id="addInput"></input>
                <button onClick={this.addItem}>Dodaj</button>
                <ul>
                    {elements}
                </ul>
            </div>
        );
    }
}

export default ToDo;