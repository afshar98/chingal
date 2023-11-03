import React from 'react';
import Header from "./header/header.jsx";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <div className="container bg-surface-900 text-surface-100 bg-noise bg-cover bg-no-repeat dark:bg-surface-100 dark:text-surface-900 min-h-screen" dir="rtl">
            <Header/>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;