import React from "react";
import "./SearchForm.css";
import { useStore } from "../../store";
import { useState } from "react";
import { getCardsFromApi } from "../../utils/NewsApi/NewsApi.actions";

export default function SearchForm() {
    const [search, setKeyword] = useState("");
    const { getCards, setNotFound, setIsLoading, removeIsLoading } =
        useStore().newsCards;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setKeyword({ ...search, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading();
        const apiCards = await getCardsFromApi(search.keyword);
        if (apiCards.length) {
            getCards(apiCards, search.keyword);
        } else {
            setNotFound();
        }
        removeIsLoading();
    };

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
            <form className='search-form__search' onSubmit={handleSubmit}>
                <input
                    className='search-form__search-text'
                    type='text'
                    placeholder='Enter topic'
                    name='keyword'
                    onChange={handleChange}
                />
                <button className='search-form__search-button' type='submit'>
                    Search
                </button>
            </form>
        </section>
    );
}
