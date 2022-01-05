import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="flex-container flex-rows w-100">
            <div className="flex-container flex-cols space-between items-center">
                <div>bla bla bla</div>
                <div>
                    <Link to="/">
                        <img src={require('../../../Images/logo.png')} alt="logo" />
                    </Link>
                </div>
                <div>
                    bla bla bla bla
                </div>
            </div>
            <div className="w-90 center-block">
                <Navbar />
            </div>
        </header>
    )
}

export default Header
