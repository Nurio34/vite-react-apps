import { createContext, useContext, useEffect, useState } from "react";
import { data } from "./data";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function GlobalApp({ children }) {
    const [stocks, setStocks] = useState([]);
    console.log({ stocks });
    useEffect(() => {
        setStocks(data);
    }, [data]);

    return (
        <GlobalContext.Provider value={{ stocks, setStocks }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalApp;
