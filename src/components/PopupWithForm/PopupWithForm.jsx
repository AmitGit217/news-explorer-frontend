import React, { useContext, useEffect } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import "./PopupWithForm.css";

export default function PopupWithForm({ title, children }) {
    const { popup, setPopup } = useContext(PopupContext);

    useEffect(() => {
        const closeFromEsc = (e) => e.key === "Escape" && setPopup(false);
        document.addEventListener("keydown", closeFromEsc);
    }, [setPopup]);

    return (
        <div
            className={`popup__overlay ${popup && "popup__overlay_show"}`}
            onClick={(e) => e.target === e.currentTarget && setPopup(false)}>
            <div className='popup'>
                <button
                    className='popup__exit'
                    type='button'
                    onClick={() => setPopup(!popup)}
                />
                <h6 className='popup__title'>{title}</h6>
                <form className='popup__form'>
                    {children}
                    <button className='popup__form-submit' type='submit' />
                    <p className='popup__form-nav'>
                        or{" "}
                        <span className='popup__form-nav_action'>Sign in</span>
                    </p>
                </form>
            </div>
        </div>
    );
}
