import './reset.css';
import './app.css';
import { useState } from 'react';

export default function App() {

  const [count, SetCount] = useState(0);

  const Inccrement = () => {
    SetCount(currentCount => currentCount + 1);
  }

  const Decrement = () => {
    SetCount(currentCount => currentCount - 1);
  }

  return (
    <div className="container">
      <button className="button" onClick={Inccrement}>+</button>
      <span className="content">{count}</span>
      <button className="button" onClick={Decrement}>-</button>
    </div>
  )
}

