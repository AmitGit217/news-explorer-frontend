import React from "react";
import "./NewsCard.css";
import { useStore } from "../../store";

export default function NewsCard({
    title,
    text,
    date,
    image,
    source,
    currentCard,
}) {
    const { keyword } = useStore().newsCards;
    const {
        isLoggedIn,
        savedCards,
        getSavedCards,
        saveArticle,
        deleteCardById,
    } = useStore().currentUser;
    const realDate = new Date(date);

    const saveCard = async () => {
        const savedArticle = await saveArticle({
            title,
            text,
            date,
            image,
            source,
            keyword,
            link: currentCard.url,
        });
        getSavedCards();
        return savedArticle;
    };

    const removeCardFromSavedArray = (currentCard) => {
        const cardToRemove = savedCards.find(
            (card) => card.image === currentCard.urlToImage
        );
        deleteCardById(cardToRemove._id);
    };

    const isSaved = savedCards.some((card) => card.title === currentCard.title);
    const disable = !isLoggedIn;

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
                    onClick={
                        isSaved
                            ? () => removeCardFromSavedArray(currentCard)
                            : saveCard
                    }
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
