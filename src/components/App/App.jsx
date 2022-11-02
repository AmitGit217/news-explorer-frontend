import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import Top from "../Top/Top";
import Footer from "../Footer/Footer";

import Navigation from "../Navigation/Navigation";
import { useCurrentPopup } from "../../utils/helpHooks";

export default function App() {
    const popupToShow = useCurrentPopup();

    return (
        <section className='app'>
            {popupToShow}
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
