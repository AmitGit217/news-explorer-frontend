import React, { useContext } from "react";
import "./SavedNewsHeader.css";
import { Link } from "react-router-dom";
import logoutIcon from "../../images/logout.svg";
import { NavContext } from "../../contexts/NavContext";

export default function SavedNewsHeader() {
    const { setMobileNav } = useContext(NavContext);

    return (
        <header className='saved-news-header'>
            <div className='saved-news-header__title' />
            <button
                className='saved-news-header__burger'
                type='button'
                onClick={() => setMobileNav(true)}
            />
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
