import { createContext, useReducer } from 'react';
import { TodoReducer } from './TodoReducer';

export const TodoContext = createContext();

export default function TodoContextProvider(props) {

    let initialState = {
        todos: []
    }

    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (

        <TodoContext.Provider value={{ state, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    )
}
