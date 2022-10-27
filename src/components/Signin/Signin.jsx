import React from "react";

export default function Signin() {
    return (
        <div className='popup__form-labels'>
            <label className='popup__form-label'>
                Email:
                <input className='popup__form-input' type='text' />
            </label>
            <label className='popup__form-label'>
                Password:
                <input className='popup__form-input' type='text' />
            </label>
        </div>
    );
}
