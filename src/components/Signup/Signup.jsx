import React from "react";
import { useStore } from "../../store";
import { useFormWithValidation } from "../../utils/helpHooks";

export default function Signup() {
    const { openTooltip } = useStore().tooltip;
    const { setRegisteredTrue } = useStore().userRegistration;
    const { values, handleChange, errors, isValid, resetForm } =
        useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        openTooltip();
    };

    return (
        <>
            <h2 className='popup__title'>Sign up</h2>
            <form className='popup__form' onSubmit={handleSubmit}>
                <div className='popup__form-labels'>
                    <label className='popup__form-label'>
                        Email:
                        <input
                            name='email'
                            onChange={handleChange}
                            placeholder='Enter email'
                            className='popup__form-input'
                            type='email'
                            required
                        />
                        <p className='popup__form-input_type_error'>
                            {errors.email && "Please enter a valid email"}
                        </p>
                    </label>
                    <label className='popup__form-label'>
                        Password:
                        <input
                            name='password'
                            onChange={handleChange}
                            placeholder='Enter password'
                            className='popup__form-input'
                            type='password'
                            required
                        />
                        <p className='popup__form-input_type_error'>
                            {errors.password}
                        </p>
                    </label>
                    <label className='popup__form-label'>
                        Username:
                        <input
                            name='name'
                            onChange={handleChange}
                            placeholder='Enter your username'
                            className='popup__form-input'
                            type='text'
                            required
                        />
                        <p className='popup__form-input_type_error'>
                            {errors.name}
                        </p>
                    </label>
                </div>

                <button
                    className={`popup__form-submit ${
                        !isValid && "popup__form-submit_disabled"
                    }`}
                    type='submit'
                    disabled={isValid ? false : true}>
                    Sign up
                </button>
                <p className='popup__form-nav'>
                    or{" "}
                    <span
                        className='popup__form-nav_action'
                        onClick={setRegisteredTrue}>
                        Sign in
                    </span>
                </p>
            </form>
        </>
    );
}
