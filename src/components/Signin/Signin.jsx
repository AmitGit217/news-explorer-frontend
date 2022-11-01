import React from "react";
import { useContext } from "react";
import { RegisterContext } from "../../contexts/RegisterContext";

export default function Signin() {
    const { setRegister } = useContext(RegisterContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegister("success");
    };
    return (
        <>
            <h2 className='popup__title'>Sign in</h2>
            <form className='popup__form' onSubmit={handleSubmit}>
                <div className='popup__form-labels'>
                    <label className='popup__form-label'>
                        Email:
                        <input
                            className='popup__form-input'
                            type='text'
                            placeholder='Enter email'
                            required
                        />
                        <p className='popup__form-input_type_error'></p>
                    </label>
                    <label className='popup__form-label'>
                        Password:
                        <input
                            placeholder='Enter password'
                            className='popup__form-input'
                            type='text'
                            required
                        />
                        <p className='popup__form-input_type_error'></p>
                    </label>
                </div>
                <button className='popup__form-submit' type='submit'>
                    Sign in
                </button>
                <p className='popup__form-nav'>
                    or{" "}
                    <span
                        className='popup__form-nav_action'
                        onClick={() => setRegister(false)}>
                        Sign up
                    </span>
                </p>
            </form>
        </>
    );
}
