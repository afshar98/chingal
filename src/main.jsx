import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {SearchProvider} from "./contexts/search-context.jsx";
import {ThemeProvider} from "./contexts/theme-context.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <SearchProvider>
            <App/>
        </SearchProvider>
    </ThemeProvider>
)
