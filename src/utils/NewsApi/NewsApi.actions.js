import newsApi from "./NewsApi";

export const getCardsFromApi = async (keyword) => {
    try {
        const res = await newsApi.getArticles(keyword);
        return res.articles;
    } catch (err) {
        return console.log(err);
    }
};
