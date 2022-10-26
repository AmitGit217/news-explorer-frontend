import React from "react";
import "./NewsCard.css";
import archive from "../../images/archive-icon.svg";
import archiveActive from "../../images/archive-icon_active.svg";
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
                <img
                    onClick={() => setTempIsSaved(!tempIsSaved)}
                    className='news-card__archive-image '
                    src={tempIsSaved ? archiveActive : archive}
                    alt='archive'
                />
            </span>
        </div>
    );
}
