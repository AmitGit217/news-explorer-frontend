import React from "react";
import "./Footer.css";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";

export default function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__copy'>
                © 2021 Supersite, Powered by News API
            </p>
            <div className='footer__links'>
                <p className='footer__link footer__link_text'>Home</p>
                <a className='footer__link footer__link_text' href='#practicum'>
                    Practicum
                </a>
                <a
                    className='footer__link footer__link_image'
                    href='#practicum'>
                    <img className='footer__image' src={github} alt='github' />
                </a>
                <a
                    className='footer__link footer__link_image'
                    href='#practicum'>
                    <img className='footer__image' src={linkedin} alt='' />
                </a>
            </div>
        </footer>
    );
}
