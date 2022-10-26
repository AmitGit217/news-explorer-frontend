import React from "react";
import "./SavedNewsCard.css";
import trash from "../../images/trash.svg";

export default function SavedNewsCard({ title, text, date, image, source }) {
    // Temporary state visualization before API connection
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
                    className='news-card__archive-image '
                    src={trash}
                    alt='archive'
                />
            </span>
        </div>
    );
}
