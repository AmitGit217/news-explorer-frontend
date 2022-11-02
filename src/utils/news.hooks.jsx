import newsApi from "./NewsApi";

export const getCards = async (keyword) => {
    try {
        const res = await newsApi.getArticles(keyword);
        return res;
    } catch (err) {
        return console.log(err);
    }
};
