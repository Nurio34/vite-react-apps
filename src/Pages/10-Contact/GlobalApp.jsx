import { createContext, useContext, useState } from "react";

const ContactContext = createContext();
export const useContactContext = () => useContext(ContactContext);

function GlobalApp({ children }) {
    const [currentStep, setCurrentStep] = useState("contact");

    const [formData, setFormData] = useState({});

    return (
        <ContactContext.Provider
            value={{ currentStep, setCurrentStep, formData, setFormData }}
        >
            {children}
        </ContactContext.Provider>
    );
}

export default GlobalApp;
