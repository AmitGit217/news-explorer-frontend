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
