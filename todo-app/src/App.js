//react
import { useEffect, useState } from "react";

//components
import Todo from "./todo/todo";

const App = () => {
  //state
  const [todos, SetTodos] = useState([]);

  //get all the todos from the json
  const loadTodos = async () => {
    try {
      let result = await fetch(`./data/todos.json`);
      let data = await result.json();

      //call the set state function
      SetTodos(data)
      
      //console.table(data);

    } catch (error) {
      console.error(error);
    }


  }

  //effect that happens only once
  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div>
      { todos.length > 0 ? todos.map((item) => <Todo key={item.id} todo={item} />) : <span>NO DATA</span> }
    </div>
  )
}

export default App;
