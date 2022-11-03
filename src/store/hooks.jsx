import { useState } from "react";
import { checkToken, getUserArticles } from "../utils/MainApi/MainApi.actions";

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

export const useCurrentUser = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);
    const [currentUser, setter] = useState({});
    const [savedCards, setCards] = useState([]);
    const setCurrentUser = (values) => {
        setter({ ...values });
        setLoggedIn(true);
    };

    const checkLocalToken = async (token) => {
        const res = await checkToken(token);
        return res;
    };
    const logoutCurrentUser = () => {
        setter({});
        setLoggedIn(false);
        localStorage.removeItem("token");
    };

    const getSavedCards = async () => {
        const cards = await getUserArticles();
        setCards(cards);
    };
    return {
        currentUser,
        isLoggedIn,
        setCurrentUser,
        logoutCurrentUser,
        checkLocalToken,
        getSavedCards,
        savedCards,
    };
};

export const useCards = () => {
    const [search, setKeyword] = useState("");
    const [notFound, setNotFoundFromApi] = useState(false);
    const [isLoading, loadingSetter] = useState(false);
    const [cards, setter] = useState([]);

    const getCards = (apiCards, keyWord) => {
        setter(apiCards);
        setNotFoundFromApi(false);
        setKeyword(keyWord);
    };
    const setNotFound = () => {
        setNotFoundFromApi(true);
        setter([]);
    };

    const setIsLoading = () => {
        loadingSetter(true);
        setNotFoundFromApi(false);
        setter([]);
    };
    const removeIsLoading = () => loadingSetter(false);

    return {
        cards,
        getCards,
        notFound,
        setNotFound,
        setIsLoading,
        removeIsLoading,
        isLoading,
        search,
    };
};
