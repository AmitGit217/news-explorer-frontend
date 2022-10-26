import React from "react";
import "./SavedNews.css";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import news from "../../db/news-temp.js";

export default function SavedNews() {
    return (
        <section className='saved-news'>
            <div className='saved-news__text'>
                <h4 className='saved-news__title'>Saved articles</h4>
                <h5 className='saved-news__description'>
                    Elise, you have 5 saved articles
                </h5>
                <p className='saved-news__keywords'>
                    By keywords:{" "}
                    <strong>Nature, Yellowstone, and 2 other</strong>
                </p>
            </div>
            <div className='saved-news__articles'>
                {news.map((article, index) => {
                    return (
                        <SavedNewsCard
                            isSaved={true}
                            key={index}
                            image={article.image}
                            date={article.date}
                            title={article.title}
                            text={article.text}
                            source={article.source}
                        />
                    );
                })}
            </div>
        </section>
    );
}
