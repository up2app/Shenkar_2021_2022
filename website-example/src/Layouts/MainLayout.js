import React from 'react';
import './MainLayout.css';

import Navigation from '../Navigation/Navigation';
import Header from '../Components/Shared/Header/Header';

function MainLayout() {
    return (
        <div className="flex-container flex-rows center-block w-90">
            <Header />
            <div className="flex-container flex-cols w-100">
                <main className="w-90">
                    <Navigation />
                </main>
                <aside>
                    im aside
                </aside>
            </div>
            <footer>
                im footer
            </footer>
        </div>
    )
}

export default MainLayout
