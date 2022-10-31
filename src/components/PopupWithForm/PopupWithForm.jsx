import React, { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import "./PopupWithForm.css";
import { useCloseFromEsc } from "../../utils/functions";

export default function PopupWithForm({ children }) {
    const { isPopupWithFormOpen, setPopupWithForm } = useContext(PopupContext);
    useCloseFromEsc(setPopupWithForm);

    return (
        <div
            className={`popup ${isPopupWithFormOpen && "popup_show"}`}
            onClick={(e) =>
                e.target === e.currentTarget && setPopupWithForm(false)
            }>
            <div className='popup__container'>
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
