//react
import { useEffect, useState } from "react";

//components
import Todo from "./todo/todo";

const App = () => {
  //state
  const [todos, SetTodos] = useState([]);

  //get all the todos from the json
  const loadTodos = async () => {
    let result = await fetch(`./data/todos.json`);
    let data = await result.json();
    
    //call the set state function
    SetTodos(data)
    console.log(`data`, data);
  }

  //effect that happens only once
  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div>
      {todos.map((item) => <Todo key={item.id} todo={item} />)}
    </div>
  )
}

export default App;
