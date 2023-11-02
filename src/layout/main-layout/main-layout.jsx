import React from 'react';
import Header from "./header/header.jsx";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <div className="">
            <Header/>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;