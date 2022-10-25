import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/saved-news' element={<SavedNews />} />
        </Routes>
    );
}
