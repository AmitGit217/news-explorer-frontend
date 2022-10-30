import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import Top from "../Top/Top";
import Footer from "../Footer/Footer";
import Signin from "../Signin/Signin";
import { PopupContext } from "../../contexts/PopupContext";
import { RegisterContext } from "../../contexts/RegisterContext";
import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Signup from "../Signup/Signup";
import Navigation from "../Navigation/Navigation";
import { NavContext } from "../../contexts/NavContext";

export default function App() {
    const [popup, setPopup] = useState(false);
    const [isRegistered, setRegister] = useState(true);
    const [isMobileNavOpen, setMobileNav] = useState(false);
    return (
        <PopupContext.Provider value={{ popup, setPopup }}>
            <RegisterContext.Provider value={{ isRegistered, setRegister }}>
                <NavContext.Provider value={{ isMobileNavOpen, setMobileNav }}>
                    <section className='app'>
                        <PopupWithForm
                            children={isRegistered ? <Signin /> : <Signup />}
                        />
                        <Navigation />
                        <Top />
                        <Routes>
                            <Route path='/' element={<Main />} />
                            <Route path='/saved-news' element={<SavedNews />} />
                        </Routes>
                        <Footer />
                    </section>
                </NavContext.Provider>
            </RegisterContext.Provider>
        </PopupContext.Provider>
    );
}
