import React from "react";
import { useStore } from "../../store";
import { useFormWithValidation } from "../../utils/helpHooks";
import { signin } from "../../utils/MainApi/user.hooks";

export default function Signin() {
    const { setRegisteredFalse } = useStore().userRegistration;
    const { values, handleChange, errors, isValid, resetForm } =
        useFormWithValidation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signin(values);
        if (!res.message) {
            localStorage.setItem("token", res.token);
        }
    };

    return (
        <>
            <h2 className='popup__title'>Sign in</h2>
            <form className='popup__form' onSubmit={handleSubmit}>
                <div className='popup__form-labels'>
                    <label className='popup__form-label'>
                        Email:
                        <input
                            name='email'
                            className='popup__form-input'
                            type='email'
                            placeholder='Enter email'
                            onChange={handleChange}
                            required
                        />
                        <p className='popup__form-input_type_error'>
                            {errors.email && "Invalid email address"}
                        </p>
                    </label>
                    <label className='popup__form-label'>
                        Password:
                        <input
                            name='password'
                            placeholder='Enter password'
                            className='popup__form-input'
                            type='password'
                            onChange={handleChange}
                            required
                        />
                        <p className='popup__form-input_type_error'>
                            {errors.password}
                        </p>
                    </label>
                </div>
                <button
                    className={`popup__form-submit  ${
                        !isValid && "popup__form-submit_disabled"
                    }`}
                    type='submit'
                    disabled={isValid ? false : true}>
                    Sign in
                </button>
                <p className='popup__form-nav'>
                    or{" "}
                    <span
                        className='popup__form-nav_action'
                        onClick={setRegisteredFalse}>
                        Sign up
                    </span>
                </p>
            </form>
        </>
    );
}
