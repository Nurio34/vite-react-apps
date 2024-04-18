import { useContext, useRef } from "react";
import { createContext } from "react";
import Card from "./components/Card";

const CardGeneratorContext = createContext();
export const useCardGeneratorContext = () => useContext(CardGeneratorContext);

function GlobalApp({ children }) {
    const CardElement = useRef();

    return (
        <CardGeneratorContext.Provider value={{ CardElement }}>
            {children}
        </CardGeneratorContext.Provider>
    );
}

export default GlobalApp;
