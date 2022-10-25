import React from "react";
import "./NewsCardsList.css";
import news from "../../db/news-temp.js";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsCardsList() {
    return (
        <section className='news-list'>
            <h4 className='news-list__title'>Search results</h4>
            {news.map((article, index) => {
                return (
                    <NewsCard
                        key={index}
                        image={article.image}
                        date={article.date}
                        title={article.title}
                        text={article.text}
                        source={article.source}
                    />
                );
            })}
        </section>
    );
}
