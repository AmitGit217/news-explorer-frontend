import React from "react";
import { useContext } from "react";
import { RegisterContext } from "../../contexts/RegisterContext";

export default function ToolTip() {
    const { setRegister } = useContext(RegisterContext);
    return (
        <>
            <h6 className='popup__title'>
                Registration successfully completed!
            </h6>
            <p className='popup__form-nav'>
                <span
                    className='popup__form-nav_action'
                    onClick={() => setRegister(true)}>
                    Sign in
                </span>
            </p>
        </>
    );
}
