
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Users from './Pages/Users/Users';
import NotFound from './Pages/NotFound/NotFound';
import Profile from './Pages/Profile/Profile';

export default function Navigation() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} >
                    <Route path=":name" element={<Profile />} />
                </Route>
                <Route path="/profile/:name" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}