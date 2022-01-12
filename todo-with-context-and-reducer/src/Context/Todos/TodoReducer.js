
export const ACTIONS = {
    ADD_TODO: 'add',
    REMOVE_TODO: 'remove',
    TOGGLE_TODO: 'toggle'
}

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            let newTodo = CreateTodo(action.payload.name);
            return { todos: [...state.todos, newTodo] }
        case ACTIONS.REMOVE_TODO:
            return { todos: state.todos.filter(todo => todo.id !== action.payload.id) }
        default:
            return state;
    }

}

function CreateTodo(name) {
    return {
        id: new Date(),
        name: name,
        completed: false,
    }
}