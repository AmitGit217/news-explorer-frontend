import userActions from "./user.api";

export const signup = (email, password, name) => {
    userActions.signup(email, password, name).then((res) => console.log(res));
};
