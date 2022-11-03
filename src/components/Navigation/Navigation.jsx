import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";

export default function Navigation() {
    const navigate = useNavigate();
    const { isLoggedIn } = useStore().currentUser;
    const { openPopup } = useStore().popupWithForm;
    const { isMobileNavOpen, closeMobileNav } = useStore().mobileNav;

    const openFormPopup = () => {
        openPopup();
        closeMobileNav();
    };
    const backHome = () => {
        navigate("/");
        closeMobileNav();
    };
    const goToSavedArticlesPage = () => {
        closeMobileNav();
        navigate("/saved-news");
    };

    return (
        <div className={`popup-nav ${isMobileNavOpen && "popup-nav_show"}`}>
            <div className='popup-nav__container'>
                <div className='popup-nav__top'>
                    <div className='popup-nav__title' />
                    <button
                        className='popup-nav__exit'
                        type='button'
                        onClick={closeMobileNav}
                    />
                </div>
                <div className='popup-nav__bottom'>
                    <div className='popup-nav__links'>
                        <p className='popup-nav__link' onClick={backHome}>
                            Home
                        </p>
                        {isLoggedIn && (
                            <p
                                className='popup-nav__link'
                                onClick={goToSavedArticlesPage}>
                                Saved Articles
                            </p>
                        )}
                    </div>
                    <button
                        className='popup-nav__signin'
                        onClick={openFormPopup}>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
}
