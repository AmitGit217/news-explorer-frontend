import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import Top from "../Top/Top";
import Footer from "../Footer/Footer";
import Signin from "../Signin/Signin";
import { PopupContext } from "../../contexts/PopupContext";
import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function App() {
    const [popup, setPopup] = useState(false);
    return (
        <PopupContext.Provider value={{ popup, setPopup }}>
            <section className='app'>
                <PopupWithForm children={<Signin />} title='Signin' />
                <Top />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/saved-news' element={<SavedNews />} />
                </Routes>

                <Footer />
            </section>
        </PopupContext.Provider>
    );
}
