import React from "react";
import "./SavedNewsCard.css";
import trash from "../../images/trash.svg";

export default function SavedNewsCard({ title, text, date, image, source }) {
    // Temporary state visualization before API connection
    return (
        <div className='saved-news-card'>
            <img className='saved-news-card__image' src={image} alt={title} />
            <div className='saved-news-card__main'>
                <p className='saved-news-card__date'>{date}</p>
                <h5 className='saved-news-card__title'>{title}</h5>
                <p className='saved-news-card__text'>{text}</p>
                <p className='saved-news-card__source'>{source}</p>
            </div>
            <span className='saved-news-card__archive'>
                <img
                    className='saved-news-card__archive-image '
                    src={trash}
                    alt='archive'
                />
            </span>
            <p className='saved-news-card__keyword'></p>
        </div>
    );
}
