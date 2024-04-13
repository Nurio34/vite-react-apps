import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import categories from "./data/categories";
import axios from "axios";
import logo from "../../assets/logo.png";

const QRContext = createContext();
export const useQR = () => useContext(QRContext);

const api_key = import.meta.env.VITE_QR_KEY;
const staticRoute = "/api/qr/static/";
const dynamicRoute = "/api/campaign/";
const logoUpload = "/accounts/uploads";
const api_url = `https://qrtiger.com`;
const api_mock_url = `https://stoplight.io/mocks/qrtiger/qrtiger-api/7801905`;

function GlobalApp({ children }) {
    const [category, setCategory] = useState(categories[0]);
    const [body, setBody] = useState({ url: "", color: "" });

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState("");
    const [error, setError] = useState("");

    const [logo, setLogo] = useState("");
    console.log(logo);

    const staticBody = {
        size: 660,
        colorDark: body.color,
        logo,
        eye_outer: "eyeOuter1",
        eye_inner: "eyeInner2",
        qrData: "pattern0",
        backgroundColor: "rgb(255,255,255)",
        transparentBkg: false,
        qrCategory: "url",
        text: body.url,
        frame: 13,
        frameColor: "orange",
        frameText: "Scan This",
    };

    const dynamicBody = {
        qr: {
            size: 500,
            colorDark: body.color,
            logo,
            eye_outer: "eyeOuter2",
            eye_inner: "eyeInner1",
            qrData: "pattern0",
            backgroundColor: "rgb(255,255,255)",
            transparentBkg: false,
            qrCategory: "url",
            text: body.url,
        },
        qrUrl: "https://www.qrcode-tiger.com.com",
        qrType: "qr2",
        qrCategory: "url",
    };

    const options = {
        // mode: "no-cors",
        headers: {
            Authorization: `Bearer ${api_key}`,
            "Content-Type": "application/json",
        },
    };

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            const res = await axios.post(
                api_url + staticRoute,
                staticBody,
                options,
            );
            const data = res.data.url;
            setData(data);
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [body]);

    const uploadLogo = async (obj) => {
        try {
            const res = await axios.post(api_url + logoUpload, obj, {
                headers: {
                    Authorization: `Bearer ${api_key}`,
                },
            });
            console.log(res);
            setLogo(res.data.qrUrl);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <QRContext.Provider
            value={{
                category,
                setCategory,
                body,
                setBody,
                fetchData,
                isLoading,
                data,
                logo,
                setLogo,
                uploadLogo,
            }}
        >
            {children}
        </QRContext.Provider>
    );
}

export default GlobalApp;
