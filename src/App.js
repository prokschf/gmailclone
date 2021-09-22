import "./App.css";
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';


function App() {
    return (
        <div className="app">
            <Header />
            <Sidebar />
        </div>
    );
}

export default App;