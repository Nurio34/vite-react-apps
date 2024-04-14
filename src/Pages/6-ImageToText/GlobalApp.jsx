import { createContext, useContext, useEffect, useState } from "react";
import useThemeChange from "./components/Header/ThemeChange/useThemeChange";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function GlobalApp({ children }) {
    const { isThemeLight, setIsThemeLight } = useThemeChange();

    return (
        <GlobalContext.Provider value={{ isThemeLight, setIsThemeLight }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalApp;
