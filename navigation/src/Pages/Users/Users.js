import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

export default function Users(){

    return (
        <div>
            <Navbar />
            <h1>Users</h1>
            <Outlet/>
        </div>
    )

}