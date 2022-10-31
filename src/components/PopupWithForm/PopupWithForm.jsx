import React, { useContext, useEffect } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import "./PopupWithForm.css";

export default function PopupWithForm({ title, children }) {
    const { isPopupWithFormOpen, setPopupWithForm } = useContext(PopupContext);

    useEffect(() => {
        const closeFromEsc = (e) =>
            e.key === "Escape" && setPopupWithForm(false);
        document.addEventListener("keydown", closeFromEsc);
    }, [setPopupWithForm]);

    return (
        <div
            className={`popup__overlay ${
                isPopupWithFormOpen && "popup__overlay_show"
            }`}
            onClick={(e) =>
                e.target === e.currentTarget && setPopupWithForm(false)
            }>
            <div className='popup'>
                <button
                    className='popup__exit'
                    type='button'
                    onClick={() => setPopupWithForm(false)}
                />
                {children}
            </div>
        </div>
    );
}
