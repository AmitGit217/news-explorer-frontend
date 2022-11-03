import React, { createContext, useContext } from "react";
import {
    usePopupWithFrom,
    useUserRegistration,
    useMobileNav,
    useTooltip,
    useCurrentUser,
} from "./hooks";

const GlobalContext = createContext({});

export const StoreProvider = ({ children }) => {
    const popupWithForm = usePopupWithFrom();
    const userRegistration = useUserRegistration();
    const mobileNav = useMobileNav();
    const tooltip = useTooltip();
    const currentUser = useCurrentUser();
    const store = {
        popupWithForm,
        userRegistration,
        mobileNav,
        tooltip,
        currentUser,
    };
    return (
        <GlobalContext.Provider value={store}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useStore = () => {
    const store = useContext(GlobalContext);
    return store;
};
