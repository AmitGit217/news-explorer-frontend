import React, { useContext } from "react";
import "./Navigation.css";
import { NavContext } from "../../contexts/NavContext";
import { PopupContext } from "../../contexts/PopupContext";

export default function Navigation() {
    const { setPopup } = useContext(PopupContext);
    const { isMobileNavOpen, setMobileNav } = useContext(NavContext);

    const openFormPopup = () => {
        setPopup(true);
        setMobileNav(false);
    };

    return (
        <div
            className={`popup-nav__overlay ${
                isMobileNavOpen && "popup-nav__overlay_show"
            }`}>
            <div className='popup-nav'>
                <div className='popup-nav__top'>
                    <h6 className='popup-nav__title'>NewsExplorer</h6>
                    <button
                        className='popup-nav__exit'
                        type='button'
                        onClick={() => setMobileNav(false)}
                    />
                </div>
                <div className='popup-nav__bottom'>
                    <a href='home' className='popup-nav__home-link'>
                        Home
                    </a>
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
