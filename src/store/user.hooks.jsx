import { useState } from "react";
import {
    checkToken,
    deleteArticleById,
    getUserArticles,
    saveArticleToApi,
    signin,
} from "../utils/MainApi/MainApi.controller";

export const useCurrentUser = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);
    const [currentUser, setUser] = useState({});
    const [savedCards, setCards] = useState([]);
    const setCurrentUser = (values) => {
        setUser({ ...values });
    };

    const logoutCurrentUser = () => {
        setUser({});
        setLoggedIn(false);
        localStorage.removeItem("token");
    };

    const checkLocalToken = async () => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                const user = await checkToken(token);
                setUser(user);
                return user;
            } else {
                logoutCurrentUser();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const saveArticle = async (article) => {
        try {
            const res = await saveArticleToApi(article);
            return res;
        } catch (err) {
            console.log(err);
        }
    };

    const getSavedCards = async () => {
        const cards = await getUserArticles();
        if (!cards.message) {
            setCards(cards);
        } else {
            setCards([]);
        }
    };

    const deleteCardById = async (id) => {
        try {
            const res = await deleteArticleById(id);
            if (res._id) {
                getSavedCards();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const signinUser = async (values) => {
        try {
            const res = await signin(values);
            if (res.token) {
                localStorage.setItem("token", res.token);
                const user = await checkLocalToken(res.token);
                setCurrentUser(user);
                setLoggedIn(true);
                return user;
            } else {
                return res;
            }
        } catch (err) {
            console.log(err);
        }
    };
    return {
        currentUser,
        isLoggedIn,
        setCurrentUser,
        logoutCurrentUser,
        checkLocalToken,
        getSavedCards,
        savedCards,
        saveArticle,
        deleteCardById,
        signinUser,
    };
};
