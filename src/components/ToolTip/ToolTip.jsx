import React from "react";
import { useContext } from "react";
import { RegisterContext } from "../../contexts/RegisterContext";
import { TooltipContext } from "../../contexts/TooltipContext";

export default function Tooltip() {
    const { setTooltip } = useContext(TooltipContext);
    const { setRegister } = useContext(RegisterContext);
    const navigateToForm = () => {
        setTooltip(false);
        setRegister(true);
    };
    return (
        <>
            <h2 className='popup__title'>
                Registration successfully completed!
            </h2>
            <p className='popup__form-nav'>
                <span
                    className='popup__form-nav_action'
                    onClick={navigateToForm}>
                    Sign in
                </span>
            </p>
        </>
    );
}
