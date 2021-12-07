import { useState } from "react";
import Todo from "./todo/todo";

const App = () => {

  const [todos, SetTodos] = useState([
    {id: 1, name:'Eat', desc:'you need to eat', startDate:'2021-12-07T16:30:00', DueTo:'2021-12-07T16:40:00'},
    {id: 2, name:'Sleep', desc:'zzzzzzzzzzzz', startDate:'2021-12-10', DueTo:'2021-12-12'},
    {id: 3, name:'Read', desc:'wow!! great book!!', startDate:'2021-12-08T20:00:00', DueTo:'2021-12-08T21:30:00'},
    {id: 4, name:'Drink', desc:'did i do that??', startDate:'', DueTo:''},
    {id: 5, name:'Having Fun', desc:'whazzzzzzzzzzzzzzzzzzzzzzzzup???', startDate:'', DueTo:''},
  ]);


  return (
    <div>
      {todos.map((item)=><Todo todo={item}/>)}
    </div>
  )
}

export default App;
