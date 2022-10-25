import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import Top from "../Top/Top";

export default function App() {
    return (
        <section className='app'>
            <Top />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/saved-news' element={<SavedNews />} />
            </Routes>
        </section>
    );
}
