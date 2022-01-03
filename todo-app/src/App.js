//react
import { useEffect, useState } from "react";

//components
import Todo from "./todo/todo";

const App = () => {
  //state
  const [todos, SetTodos] = useState([]);
  const [doneTodos, SetDoneTodos] = useState([]);

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

  //
  const ToggleIsDone = (id) => {
    //todo -> יקבל ערך אם המשימה קיימת במערך של המשימות לביצוע
    let todo = todos.find(item => item.id === id);
    //doneTodo -> יקבל ערך אם המשימה נמצאת במשימות שבוצעו
    let doneTodo = doneTodos.find(item => item.id === id);

    if(todo){
      todo.isDone = true;
      SetDoneTodos((prevTodos) => [...prevTodos, todo]);
      SetTodos(() => todos.filter(item=>item.id !== id));
    }
    else{
      doneTodo.isDone = false;
      SetTodos((prevTodos) => [...prevTodos, doneTodo]);
      SetDoneTodos(()=>doneTodos.filter(item=>item.id !== id))
    }
  }

  //effect that happens only once
  useEffect(() => {
    loadTodos();
  }, []);


  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.length > 0 ? todos.map((item) => <Todo key={item.id} todo={item} toggle={ToggleIsDone} />) : <span>NO DATA</span>}
      </ul>
      <h2>Done</h2>
      <ul>
        {doneTodos.length > 0 ? doneTodos.map((item) => <Todo key={item.id} todo={item} toggle={ToggleIsDone} />) : <span>NO DATA</span>}
      </ul>
    </div>
  )
}

export default App;





