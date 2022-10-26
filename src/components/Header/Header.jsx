import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [activeNav, setActiveNav] = useState("home");
    return (
        <header className='header'>
            <h1 className='header__title'>NewsExplorer</h1>
            <nav className='header__nav'>
                <Link
                    onClick={() => setActiveNav("home")}
                    to={"/"}
                    className={`header__button header__button-nav ${
                        activeNav === "home" && "header__button_active"
                    }`}>
                    Home
                </Link>
                <Link
                    onClick={() => setActiveNav("saved-news")}
                    to={"/saved-news"}
                    className={`header__button header__button-nav ${
                        activeNav === "saved-news" && "header__button_active"
                    }`}>
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
