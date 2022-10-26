import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className='header'>
            <h1 className='header__title'>NewsExplorer</h1>
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
                    className='header__button header__signin-button'
                    type='button'>
                    Sign in
                </button>
            </nav>
        </header>
    );
}
