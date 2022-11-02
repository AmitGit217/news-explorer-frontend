import { useEffect } from "react";
import { useStore } from "../../store";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Tooltip from "../Tooltip/Tooltip";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";

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
