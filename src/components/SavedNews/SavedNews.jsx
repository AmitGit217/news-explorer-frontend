import React from "react";
import "./SavedNews.css";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import { savedNews } from "../../db/news-temp.js";
import { useStore } from "../../store";

export default function SavedNews() {
    const { currentUser } = useStore().currentUser;
    return (
        <section className='saved-news'>
            <div className='saved-news__text'>
                <h2 className='saved-news__title'>Saved articles</h2>
                <p className='saved-news__description'>{currentUser.name}</p>
                <p className='saved-news__keywords'>
                    By keywords:{" "}
                    <strong>Nature, Yellowstone, and 2 other</strong>
                </p>
            </div>
            <ul className='saved-news__articles'>
                {savedNews.map((article, index) => {
                    return (
                        <li key={index}>
                            <SavedNewsCard
                                isSaved={true}
                                image={article.image}
                                date={article.date}
                                title={article.title}
                                text={article.text}
                                source={article.source}
                                keyword={article.keyword}
                            />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
