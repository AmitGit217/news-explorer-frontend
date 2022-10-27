import React from "react";
import "./NewsCard.css";
import { useState } from "react";

export default function NewsCard({
    title,
    text,
    date,
    image,
    source,
    isSaved,
}) {
    // Temporary state visualization before API connection
    const [tempIsSaved, setTempIsSaved] = useState(false);
    return (
        <div className='news-card'>
            <img className='news-card__image' src={image} alt={title} />
            <div className='news-card__main'>
                <p className='news-card__date'>{date}</p>
                <h5 className='news-card__title'>{title}</h5>
                <p className='news-card__text'>{text}</p>
                <p className='news-card__source'>{source}</p>
            </div>
            <span className='news-card__archive'>
                <button
                    onClick={() => setTempIsSaved(!tempIsSaved)}
                    type='button'
                    className={` ${
                        tempIsSaved
                            ? "news-card__archive-image_saved"
                            : "news-card__archive-image"
                    }`}
                />
                <p className='news-card__archive-popup'>
                    Sign in to save articles
                </p>
            </span>
        </div>
    );
}
