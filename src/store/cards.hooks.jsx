import { useState } from "react";

import { getCardsFromApi } from "../utils/NewsApi/NewsApi.controller";
export const useCards = () => {
    const [keyword, setKeyword] = useState("");
    const [notFound, setNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [cards, setCards] = useState([]);

    const _setNotFound = () => {
        setNotFound(true);
        setCards([]);
    };

    const _setIsLoading = () => {
        setIsLoading(true);
        setNotFound(false);
        setCards([]);
    };
    const _removeIsLoading = () => setIsLoading(false);

    const getCards = async (keyWord) => {
        _setIsLoading();
        try {
            const res = await getCardsFromApi(keyWord);
            if (res.length) {
                setCards(res);
                setKeyword(keyWord);
            } else {
                _setNotFound();
            }
            return res;
        } catch (err) {
            return console.log(err);
        } finally {
            _removeIsLoading();
        }
    };

    return {
        cards,
        getCards,
        notFound,
        isLoading,
        keyword,
    };
};
