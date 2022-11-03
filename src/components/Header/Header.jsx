import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStore } from "../../store";

export default function Header() {
    const { openPopup } = useStore().popupWithForm;
    const { openMobileNav } = useStore().mobileNav;
    const { isLoggedIn, currentUser, logoutCurrentUser } =
        useStore().currentUser;

    const logout = () => {
        logoutCurrentUser();
        localStorage.removeItem("token");
    };
    return (
        <header className='header'>
            <div className='header__title' />
            <button
                className='header__burger'
                type='button'
                onClick={openMobileNav}
            />
            <nav className='header__nav'>
                <Link
                    to={"/"}
                    className='header__button header__button_type_nav header__button_active'>
                    Home
                </Link>
                {isLoggedIn && (
                    <Link
                        to={"/saved-news"}
                        className='header__button header__button_type_nav'>
                        Saved articles
                    </Link>
                )}

                <button
                    onClick={isLoggedIn ? logout : openPopup}
                    className='header__button header__button_type_signin'
                    type='button'>
                    {isLoggedIn ? currentUser.name : "Signin"}
                </button>
            </nav>
        </header>
    );
}
