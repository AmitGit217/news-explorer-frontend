import React from "react";
import { useContext } from "react";
import { RegisterContext } from "../../contexts/RegisterContext";
import { TooltipContext } from "../../contexts/TooltipContext";

export default function Signup() {
    const { setTooltip } = useContext(TooltipContext);
    const { setRegister } = useContext(RegisterContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setTooltip(true);
    };
    return (
        <>
            <h2 className='popup__title'>Sign up</h2>
            <form className='popup__form' onSubmit={handleSubmit}>
                <div className='popup__form-labels'>
                    <label className='popup__form-label'>
                        Email:
                        <input
                            placeholder='Enter email'
                            className='popup__form-input'
                            type='email'
                            required
                        />
                        <p className='popup__form-input_type_error'></p>
                    </label>
                    <label className='popup__form-label'>
                        Password:
                        <input
                            placeholder='Enter password'
                            className='popup__form-input'
                            type='password'
                            required
                        />
                        <p className='popup__form-input_type_error'></p>
                    </label>
                    <label className='popup__form-label'>
                        Username:
                        <input
                            placeholder='Enter your username'
                            className='popup__form-input'
                            type='text'
                            required
                        />
                        <p className='popup__form-input_type_error'></p>
                    </label>
                </div>

                <button className='popup__form-submit' type='submit'>
                    Sign up
                </button>
                <p className='popup__form-nav'>
                    or{" "}
                    <span
                        className='popup__form-nav_action'
                        onClick={() => setRegister(true)}>
                        Sign in
                    </span>
                </p>
            </form>
        </>
    );
}
