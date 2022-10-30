import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import { NavContext } from "../../contexts/NavContext";

export default function Header() {
    const { setPopup } = useContext(PopupContext);
    const { setMobileNav } = useContext(NavContext);

    return (
        <header className='header' id='home'>
            <h1 className='header__title'>NewsExplorer</h1>
            <button
                className='header__burger'
                type='button'
                onClick={() => setMobileNav(true)}
            />
            <nav className='header__nav'>
                <Link
                    to={"/"}
                    className='header__button header__button-nav header__button_active'>
                    Home
                </Link>
                <Link
                    to={"/saved-news"}
                    className='header__button header__button-nav'>
                    Saved articles
                </Link>
                <button
                    onClick={() => setPopup(true)}
                    className='header__button header__signin-button'
                    type='button'>
                    Sign in
                </button>
            </nav>
        </header>
    );
}
