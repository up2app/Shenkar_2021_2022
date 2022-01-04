import { useState } from 'react';
import UserContextProvider from './Context/UsersContext';
import Register from './Components/Register/Register';

export default function App() {

  const [showRegister, SetShowRegister] = useState(false);

  const ToggleRegsiter = () => {
    let show = !showRegister;
    SetShowRegister(show);
  }

  return (
    <UserContextProvider>
      <div>
        <button onClick={ToggleRegsiter}>Show / Hide Register</button>
        {showRegister ? <Register /> : null }
      </div>
    </UserContextProvider>
  )
}
