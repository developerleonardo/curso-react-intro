import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label className="TodoForm-label">Add a new To-Do</label>
            <textarea
                value={newTodoValue}
                required
                onChange={onChange}
                placeholder="Read my favorite book"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button
                    TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancel</button>
                <button
                    className="TodoForm-button
                    TodoForm-button--add"
                >Add</button>
            </div>
        </form>
    )
}

export { TodoForm };