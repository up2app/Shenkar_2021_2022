import { useState, useContext } from 'react';
import { TodoContext } from '../../Context/Todos/TodoContext';
import { ACTIONS as TODOS_ACTIONS } from '../../Context/Todos/TodoReducer';

export default function AddTodo() {

    const { dispatch } = useContext(TodoContext);
    const [name, SetName] = useState('');

    const SendTodo = (event) => {
        event.preventDefault();
        dispatch({ type: TODOS_ACTIONS.ADD_TODO, payload: {name: name} })
        SetName('');
    }

    return (
        <div>
            <form onSubmit={SendTodo}>
                <legend>Todo Name:</legend>
                <input type="text" value={name} onChange={(event) => SetName(event.target.value)} />
            </form>
        </div>
    )
}
