import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import World from '../Pages/World/World';
import ArticleDetails from '../Components/ArticleDetails/ArticleDetails';

function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/world" element={<World />} />
            <Route path="/article/:id" element={<ArticleDetails/>}/>
        </Routes>
    )
}

export default Navigation


