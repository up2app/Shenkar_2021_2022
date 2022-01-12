import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";
import TodoContextProvider from "./Context/Todos/TodoContext";

export default function App() {
  return (
    <TodoContextProvider>
      <AddTodo />
      <TodoList />
    </TodoContextProvider>
  )
}
