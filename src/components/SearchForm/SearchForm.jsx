import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
    return (
        <div className='search-form'>
            <h2 className='search-form__title'>
                What's going on in the world?
            </h2>
            <h3 className='search-form__subtitle'>
                Find the latest news on any topic and save them in your personal
                account.
            </h3>
            <div className='search-form__search'>
                <input className='search-form__search-text' type='text' />
                <button className='search-form__search-button' type='submit' />
            </div>
        </div>
    );
}
