import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import Top from "../Top/Top";
import Footer from "../Footer/Footer";
import Signin from "../Signin/Signin";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Signup from "../Signup/Signup";
import Navigation from "../Navigation/Navigation";
import Tooltip from "../Tooltip/Tooltip";
import { useStore } from "../../store";

export default function App() {
    const { isRegistered } = useStore().userRegistration;
    const { isTooltipOpen } = useStore().tooltip;

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
        <section className='app'>
            {popupToShow()}
            <Navigation />
            <Top />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/saved-news' element={<SavedNews />} />
            </Routes>
            <Footer />
        </section>
    );
}
