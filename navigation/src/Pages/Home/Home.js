import Navbar from '../../Components/Navbar/Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    const [users, SetUsers] = useState([
        { id: 1, name: 'momo' },
        { id: 2, name: 'gogo' },
        { id: 3, name: 'yoyo' }
    ]);

    return (
        <div>
            <Navbar />
            <h1>Home</h1>
            <ul>
                {users.map(user => <li><Link to={`/users/${user.name}`}>{user.name}</Link></li>)}
            </ul>
        </div>
    )

}