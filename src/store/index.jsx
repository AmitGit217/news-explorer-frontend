import React, { createContext, useContext } from "react";
import {
    usePopupWithFrom,
    useUserRegistration,
    useMobileNav,
    useTooltip,
} from "./hooks";

const GlobalContext = createContext({});

export const StoreProvider = ({ children }) => {
    const popupWithForm = usePopupWithFrom();
    const userRegistration = useUserRegistration();
    const mobileNav = useMobileNav();
    const tooltip = useTooltip();
    const store = { popupWithForm, userRegistration, mobileNav, tooltip };
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
