import React from "react";
import "./NewsCard.css";
import { useState } from "react";
import { useStore } from "../../store";
import { saveArticle } from "../../utils/MainApi/MainApi.actions";

export default function NewsCard({
    title,
    text,
    date,
    image,
    source,
    isSaved,
    currentCard,
}) {
    // Temporary state visualization before API connection
    const [tempIsSaved, setTempIsSaved] = useState(false);
    const { search } = useStore().newsCards;
    const { isLoggedIn } = useStore().currentUser;
    const realDate = new Date(date);

    const saveCard = () => {
        saveArticle({
            title,
            text,
            date,
            image,
            source,
            link: currentCard.url,
            keyword: search,
        });
    };

    return (
        <article className='news-card'>
            <img className='news-card__image' src={image} alt={title} />
            <div className='news-card__main'>
                <p className='news-card__date'>{realDate.toDateString()}</p>
                <h2 className='news-card__title'>{title}</h2>
                <p className='news-card__text'>{text}</p>
                <p className='news-card__source'>{source}</p>
            </div>
            <span className='news-card__archive'>
                <button
                    onClick={saveCard}
                    type='button'
                    disabled={isLoggedIn ? false : true}
                    className={` ${
                        tempIsSaved
                            ? "news-card__archive-image_saved"
                            : "news-card__archive-image"
                    }`}
                />
                {!isLoggedIn && (
                    <p className='news-card__archive-popup'>
                        Sign in to save articles
                    </p>
                )}
            </span>
        </article>
    );
}
