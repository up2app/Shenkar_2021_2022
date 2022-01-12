import './reset.css';
import './app.css';
import { useReducer } from 'react';

const ACTIONS = {
  Increment: 'increment',
  Decrement: 'decrement'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.Increment:
      return { count: state.count + 1 };
    case ACTIONS.Decrement:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function App() {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const Increment = () => {
    dispatch({ type: ACTIONS.Increment });
  }

  const Decrement = () => {
    dispatch({ type: ACTIONS.Decrement });
  }

  return (
    <div className="container">
      <button className="button" onClick={Increment}>+</button>
      <span className="content">{state.count}</span>
      <button className="button" onClick={Decrement}>-</button>
    </div>
  )
}

