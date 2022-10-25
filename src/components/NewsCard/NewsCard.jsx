import React from "react";
import "./NewsCard.css";

export default function NewsCard({
    title,
    text,
    date,
    image,
    source,
    isSaved,
}) {
    return (
        <div className='news-card'>
            <img src={image} alt={title} />
            <p className='news-card__date'>{date}</p>
            <h5 className='news-card__title'>{title}</h5>
            <p className='news-card__text'>{text}</p>
            <p className='news-card__source'>{source}</p>
            <span className='news-card__archive'>
                <img
                    className={`news-card__archive-image ${
                        isSaved ? "news-card__archive-image_saved" : null
                    }`}
                    src=''
                    alt=''
                />
            </span>
        </div>
    );
}
