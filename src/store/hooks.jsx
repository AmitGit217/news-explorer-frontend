import { useState } from "react";

import { getCardsFromApi } from "../utils/NewsApi/NewsApi.controller";

export const usePopupWithFrom = () => {
    const [isPopupWithFormOpen, setPopupWithForm] = useState(false);
    const openPopup = () => setPopupWithForm(true);
    const closePopup = () => setPopupWithForm(false);
    return { isPopupWithFormOpen, openPopup, closePopup };
};

export const useUserRegistration = () => {
    const [isRegistered, setIsRegistered] = useState(true);
    const setRegisteredTrue = () => setIsRegistered(true);
    const setRegisteredFalse = () => setIsRegistered(false);
    return { isRegistered, setRegisteredTrue, setRegisteredFalse };
};

export const useMobileNav = () => {
    const [isMobileNavOpen, setMobileNav] = useState(false);
    const openMobileNav = () => setMobileNav(true);
    const closeMobileNav = () => setMobileNav(false);
    return { isMobileNavOpen, openMobileNav, closeMobileNav };
};

export const useTooltip = () => {
    const [isTooltipOpen, setTooltip] = useState(false);
    const openTooltip = () => setTooltip(true);
    const closeTooltip = () => setTooltip(false);
    return { isTooltipOpen, openTooltip, closeTooltip };
};

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
