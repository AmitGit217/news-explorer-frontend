import React from "react";
import "./Top.css";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";

export default function Top() {
    return (
        <section className='top'>
            <Header />
            <SearchForm />
        </section>
    );
}
