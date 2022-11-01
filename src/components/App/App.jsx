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
import Tooltip from "../Tooltip/Tooltip";
import { TooltipContext } from "../../contexts/Tooltip";

export default function App() {
    const [isPopupWithFormOpen, setPopupWithForm] = useState(false);
    const [isMobileNavOpen, setMobileNav] = useState(false);
    const [isRegistered, setRegister] = useState(true);
    const [isTooltipOpen, setTooltip] = useState(false);

    const popupToShow = () => {
        if (isTooltipOpen) {
            return <PopupWithForm children={<Tooltip />} />;
        } else {
            return (
                <PopupWithForm
                    children={isRegistered ? <Signin /> : <Signup />}
                />
            );
        }
    };

    return (
        <PopupContext.Provider
            value={{ isPopupWithFormOpen, setPopupWithForm }}>
            <RegisterContext.Provider value={{ isRegistered, setRegister }}>
                <NavContext.Provider value={{ isMobileNavOpen, setMobileNav }}>
                    <TooltipContext.Provider
                        value={{ isTooltipOpen, setTooltip }}>
                        <section className='app'>
                            {popupToShow()}
                            <Navigation />
                            <Top />
                            <Routes>
                                <Route path='/' element={<Main />} />
                                <Route
                                    path='/saved-news'
                                    element={<SavedNews />}
                                />
                            </Routes>
                            <Footer />
                        </section>
                    </TooltipContext.Provider>
                </NavContext.Provider>
            </RegisterContext.Provider>
        </PopupContext.Provider>
    );
}
