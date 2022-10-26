import React from "react";
import "./Top.css";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";

export default function Top() {
    const location = useLocation();

    return (
        <section
            className={`top  ${
                location.pathname === "/saved-news" && "top_white"
            }`}>
            <Header />
            {location.pathname !== "/saved-news" && <SearchForm />}
        </section>
    );
}
