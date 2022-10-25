import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className='header'>
            <h1 className='header__title'>NewsExplorer</h1>
            <nav className='header__nav'>
                <button className='header__home-button' type='button'>
                    Home
                </button>
                <button className='header__signin-button' type='button'>
                    Sign in
                </button>
            </nav>
        </header>
    );
}
