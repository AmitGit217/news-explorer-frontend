import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
    return (
        <section className='search-form'>
            <div className='search-form__text'>
                <h1 className='search-form__title'>
                    What's going on in the world?
                </h1>
                <h2 className='search-form__subtitle'>
                    Find the latest news on any topic and save them in your
                    personal account.
                </h2>
            </div>
            <form className='search-form__search'>
                <input
                    className='search-form__search-text'
                    type='text'
                    placeholder='Enter topic'
                />
                <button className='search-form__search-button' type='submit'>
                    Search
                </button>
            </form>
        </section>
    );
}
