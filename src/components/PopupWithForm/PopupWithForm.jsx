import React, { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import "./PopupWithForm.css";
import { useCloseFromEsc } from "../../utils/functions";

export default function PopupWithForm({ children }) {
    const { isPopupWithFormOpen, setPopupWithForm } = useContext(PopupContext);
    useCloseFromEsc(setPopupWithForm);

    return (
        <div
            className={`overlay ${isPopupWithFormOpen && "overlay_show"}`}
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
