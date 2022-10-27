import React from "react";
import { useContext } from "react";
import { RegisterContext } from "../../contexts/RegisterContext";

export default function Signup() {
    const { isRegistered, setRegister } = useContext(RegisterContext);
    return (
        <>
            <h6 className='popup__title'>Sign up</h6>
            <form className='popup__form'>
                <div className='popup__form-labels'>
                    <label className='popup__form-label'>
                        Email:
                        <input
                            className='popup__form-input'
                            type='text'
                            required
                        />
                        <p className='popup__form-input_error'></p>
                    </label>
                    <label className='popup__form-label'>
                        Password:
                        <input
                            className='popup__form-input'
                            type='text'
                            required
                        />
                        <p className='popup__form-input_error'></p>
                    </label>
                    <label className='popup__form-label'>
                        Username:
                        <input
                            className='popup__form-input'
                            type='text'
                            required
                        />
                        <p className='popup__form-input_error'></p>
                    </label>
                </div>

                <button className='popup__form-submit' type='submit'>
                    Sign up
                </button>
                <p className='popup__form-nav'>
                    or{" "}
                    <span
                        className='popup__form-nav_action'
                        onClick={() => setRegister(!isRegistered)}>
                        Sign in
                    </span>
                </p>
            </form>
        </>
    );
}