import React from "react";
import "./NewsCard.css";
import { useStore } from "../../store";
import { saveArticle } from "../../utils/MainApi/MainApi.actions";

export default function NewsCard({
    title,
    text,
    date,
    image,
    source,
    currentCard,
}) {
    const { search } = useStore().newsCards;
    const { isLoggedIn, savedCards, getSavedCards } = useStore().currentUser;
    const realDate = new Date(date);

    const saveCard = async () => {
        saveArticle({
            title,
            text,
            date,
            image,
            source,
            link: currentCard.url,
            keyword: search,
        });
        getSavedCards();
    };
    const isSaved = savedCards.some((card) => card.title === currentCard.title);
    const disable = !isLoggedIn || isSaved;

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
                    disabled={disable}
                    className={` ${
                        isSaved
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
