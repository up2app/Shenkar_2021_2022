import { useContext } from 'react';
import { TodoContext } from '../../Context/Todos/TodoContext';
import { ACTIONS as TODOS_ACTIONS } from '../../Context/Todos/TodoReducer';

export default function TodoList() {

    const { state, dispatch } = useContext(TodoContext);

    const RemoveTodo = (id) => {
        dispatch({ type: TODOS_ACTIONS.REMOVE_TODO, payload: { id } })
    }

    return (
        <div>
            <h1>Todos:</h1>
            {
                state.todos.length === 0 ?
                    <p>no todos</p>
                    :
                    <ul>
                        {state.todos.map(todo =>
                            <li key={todo.id}>
                                <input type="checkbox" checked={todo.completed} />{todo.name}
                                <button onClick={() => RemoveTodo(todo.id)}>X</button>
                            </li>)}
                    </ul>
            }
        </div>
    )
}
