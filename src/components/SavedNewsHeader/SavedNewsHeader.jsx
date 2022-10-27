import React from "react";
import "./SavedNewsHeader.css";
import { Link } from "react-router-dom";
import logoutIcon from "../../images/logout.svg";

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
                <div className='saved-news-header__logout'>
                    <button
                        className='saved-news-header__button saved-news-header__logout-button'
                        type='button'>
                        Elise
                    </button>
                    <img
                        className='saved-news-header__logout-icon'
                        src={logoutIcon}
                        alt='logout icon'></img>
                </div>
            </nav>
        </header>
    );
}
