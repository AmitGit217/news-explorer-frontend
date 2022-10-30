import React, { useContext } from "react";
import "./Navigation.css";
import { NavContext } from "../../contexts/NavContext";

export default function Navigation() {
    const { isMobileNavOpen, setMobileNav } = useContext(NavContext);

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
                    <button className='popup-nav__signin'>Sign in</button>
                </div>
            </div>
        </div>
    );
}
