import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/users/kuku">kuku</Link></li>
                <li><Link to="/profile/shani">shani</Link></li>
            </ul>
        </nav>
    )
}