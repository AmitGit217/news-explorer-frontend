import { useEffect } from "react";
import { useStore } from "../store";
import PopupWithForm from "../components/PopupWithForm/PopupWithForm";
import Tooltip from "../components/Tooltip/Tooltip";
import Signup from "../components/Signup/Signup";
import Signin from "../components/Signin/Signin";

export const useCloseFromEsc = (setter) => {
    useEffect(() => {
        const closeFromEsc = (e) => e.key === "Escape" && setter(false);
        document.addEventListener("keydown", closeFromEsc);
    }, [setter]);
};

export const useCurrentPopup = () => {
    const { isRegistered } = useStore().userRegistration;
    const { isTooltipOpen } = useStore().tooltip;
    if (isTooltipOpen) {
        return <PopupWithForm children={<Tooltip />} />;
    } else {
        return (
            <PopupWithForm children={isRegistered ? <Signin /> : <Signup />} />
        );
    }
};
