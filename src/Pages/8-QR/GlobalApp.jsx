import { createContext, useCallback, useContext, useState } from "react";
import categories from "./data/categories";
import axios from "axios";

const QRContext = createContext();
export const useQR = () => useContext(QRContext);

const api_key = import.meta.env.VITE_QR_KEY;
const api_url = `https://www.qrtiger.com/api/qr/static`;

function GlobalApp({ children }) {
    const [category, setCategory] = useState(categories[0]);
    const [body, setBody] = useState({ url: "", color: "" });
    console.log(body);

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState("Get your QR Code...");
    const [error, setError] = useState("");

    const bodyData = {
        color: "rgb(5, 64, 128)",
        qrCategory: "url",
        text: body.url,
    };
    console.log(bodyData);

    const options = {
        // mode: "no-cors",
        headers: {
            Authorization: `Bearer ${api_key}`,
        },
    };

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);

            const res = await axios.post(api_url, bodyData, options);
            const url = res.data.url;
            setData(url);
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <QRContext.Provider
            value={{
                category,
                setCategory,
                body,
                setBody,
                fetchData,
                data,
            }}
        >
            {children}
        </QRContext.Provider>
    );
}

export default GlobalApp;
