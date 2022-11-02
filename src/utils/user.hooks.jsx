import userActionsApi from "./MainApi";

export const signup = (email, password, name) => {
    userActionsApi
        .signup(email, password, name)
        .then((res) => console.log(res));
};
