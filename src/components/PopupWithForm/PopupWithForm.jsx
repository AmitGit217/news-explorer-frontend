import React, { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import "./PopupWithForm.css";
import { useCloseFromEsc } from "../../utils/functions";
import { RegisterContext } from "../../contexts/RegisterContext";

export default function PopupWithForm({ children }) {
    const { setRegister } = useContext(RegisterContext);
    const { isPopupWithFormOpen, setPopupWithForm } = useContext(PopupContext);
    const closePopupWithForm = () => {
        setPopupWithForm(false);
        setRegister(true);
    };

    useCloseFromEsc(setPopupWithForm);

    return (
        <div
            className={`popup ${isPopupWithFormOpen && "popup_show"}`}
            onClick={(e) =>
                e.target === e.currentTarget && closePopupWithForm()
            }>
            <div className='popup__container'>
                <button
                    className='popup__exit'
                    type='button'
                    onClick={closePopupWithForm}
                />
                {children}
            </div>
        </div>
    );
}
