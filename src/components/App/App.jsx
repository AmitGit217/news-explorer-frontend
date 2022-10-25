import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Header from "../Header/Header";
import "./App.css";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/saved-news' element={<SavedNews />} />
            </Routes>
        </>
    );
}
