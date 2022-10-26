import React from "react";
import "./SavedNewsHeader.css";
import { Link } from "react-router-dom";

export default function SavedNewsHeader() {
    return (
        <header className='saved-news-header'>
            <h1 className='saved-news-header__title'>NewsExplorer</h1>
            <nav className='saved-news-header__nav'>
                <Link
                    to={"/"}
                    className='saved-news-header__button saved-news-header__button-nav'>
                    Home
                </Link>
                <Link
                    to={"/saved-news"}
                    className='saved-news-header__button saved-news-header__button-nav saved-news-header__button_active'>
                    Saved articles
                </Link>
                <button
                    className='saved-news-header__button saved-news-header__signin-button'
                    type='button'>
                    Sign in
                </button>
            </nav>
        </header>
    );
}
