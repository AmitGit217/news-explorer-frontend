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
                {children}
            </div>
        </div>
    );
}
