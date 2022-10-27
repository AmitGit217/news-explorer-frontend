import React from "react";
import "./SavedNewsCard.css";
import { useState } from "react";

export default function SavedNewsCard({
    title,
    text,
    date,
    image,
    source,
    keyword,
}) {
    const [removeIsOpen, setRemove] = useState(false);
    return (
        <div className='saved-news-card'>
            <img className='saved-news-card__image' src={image} alt={title} />
            <div className='saved-news-card__main'>
                <p className='saved-news-card__date'>{date}</p>
                <h5 className='saved-news-card__title'>{title}</h5>
                <p className='saved-news-card__text'>{text}</p>
                <p className='saved-news-card__source'>{source}</p>
            </div>
            <span className='saved-news-card__trash'>
                <button
                    type='button'
                    className='saved-news-card__trash-image'
                />
                <p className='saved-news-card__remove-popup'>
                    Remove from saved
                </p>
            </span>
            <p className='saved-news-card__keyword'>{keyword}</p>
        </div>
    );
}
