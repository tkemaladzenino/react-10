
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Authorization from './Authorization';
import Registration from './Registration';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
                <Route path="authorization" element={<Authorization />} />
                <Route path="registration" element={<Registration />} />
            </Routes>
        </BrowserRouter>
    );
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);


