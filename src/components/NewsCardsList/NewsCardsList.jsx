import React from "react";
import "./NewsCardsList.css";
import { news } from "../../db/news-temp.js";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsCardsList() {
    return (
        <section className='news-list'>
            <div className='news-list__not-found'>
                <div className='news-list__not-found-image' />
                <p className='news-list__not-found-title'>Nothing found</p>
                <p className='news-list__not-found-text'>
                    Sorry, but nothing matched your search terms.
                </p>
            </div>
            <h2 className='news-list__title'>Search results</h2>
            <ul className='news-list__articles'>
                {news.map((article, index) => {
                    return (
                        <li>
                            <NewsCard
                                key={index}
                                image={article.image}
                                date={article.date}
                                title={article.title}
                                text={article.text}
                                source={article.source}
                            />
                        </li>
                    );
                })}
            </ul>
            <button className='news-list__show-more' type='button'>
                Show more
            </button>
        </section>
    );
}
