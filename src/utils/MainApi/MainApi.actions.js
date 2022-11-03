import userActionsApi from "./MainApi";

export const signup = async (values) => {
    try {
        const res = await userActionsApi.signup(values);
        return res;
    } catch (err) {
        return console.log(err);
    }
};

export const signin = async (values) => {
    try {
        const res = await userActionsApi.signin(values);
        return res;
    } catch (err) {
        return console.log(err);
    }
};

export const checkToken = async (token) => {
    try {
        const res = await userActionsApi.checkToken(token);
        return res;
    } catch (err) {
        return console.log(err);
    }
};

export const saveArticle = async (article) => {
    try {
        const res = await userActionsApi.saveArticle(article);
        return res;
    } catch (err) {
        return console.log(err);
    }
};

export const getUserArticles = async () => {
    try {
        const res = await userActionsApi.getUserArticles();
        return res;
    } catch (err) {
        return console.log(err);
    }
};

export const deleteArticleById = async (id) => {
    try {
        const res = await userActionsApi.deleteArticleById(id);
        return res;
    } catch (err) {
        return console.log(err);
    }
};
