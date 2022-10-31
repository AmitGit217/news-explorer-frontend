import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import { NavContext } from "../../contexts/NavContext";

export default function Header() {
    const { setPopupWithForm } = useContext(PopupContext);
    const { setMobileNav } = useContext(NavContext);

    return (
        <header className='header'>
            <div className='header__title' />
            <button
                className='header__burger'
                type='button'
                onClick={() => setMobileNav(true)}
            />
            <nav className='header__nav'>
                <Link
                    to={"/"}
                    className='header__button header__button_type_nav header__button_active'>
                    Home
                </Link>
                <Link
                    to={"/saved-news"}
                    className='header__button header__button_type_nav'>
                    Saved articles
                </Link>
                <button
                    onClick={() => setPopupWithForm(true)}
                    className='header__button header__button_type_signin'
                    type='button'>
                    Sign in
                </button>
            </nav>
        </header>
    );
}
