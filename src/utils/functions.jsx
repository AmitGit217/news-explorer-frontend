import { useEffect } from "react";

// Custom hooks
const useCloseFromEsc = (setter) => {
    useEffect(() => {
        const closeFromEsc = (e) => e.key === "Escape" && setter(false);
        document.addEventListener("keydown", closeFromEsc);
    }, [setter]);
};

export { useCloseFromEsc };
