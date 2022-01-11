import './app.css';
import { useState } from 'react';
import UserContextProvider from './Context/UsersContext';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Edit from './Components/Edit/Edit';

export default function App() {

  const [showRegister, SetShowRegister] = useState(false);

  const ToggleRegsiter = () => {
    let show = !showRegister;
    SetShowRegister(show);
  }

  return (
    <UserContextProvider>
      <div className="flex-container flex-row mb-10">
        <div>
          TODO: USER COMPONENT
        </div>
        <div className="flex-container flex-col">
          <div>
            <Register />
          </div>
          <div>
            <Login />
          </div>
          <div>
            <Edit/>
          </div>
        </div>
      </div>
    </UserContextProvider>
  )
}
