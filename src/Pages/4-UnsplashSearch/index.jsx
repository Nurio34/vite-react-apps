import { useSelector } from "react-redux";
import Header from "./components/Header";
import Content from "./components/Content";
import { useAxios } from "../../Hooks/useAxios";
import { createContext, useContext, useState } from "react";

const options = {};

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function index({ children }) {
    const { mainHeight } = useSelector((s) => s.components);

    const [searchQuery, setSearchQuery] = useState("cat");
    const [page, setPage] = useState(1);

    const url = (params) => `https://api.unsplash.com/${params}`;
    const params = `search/photos?page=${page}&query=${searchQuery}&client_id=${
        import.meta.env.VITE_UNSPLASH_SEARCH_KEY
    }`;

    const { data, loading, error } = useAxios(url(params), options);

    return (
        <GlobalContext.Provider
            value={{
                data,
                loading,
                error,
                searchQuery,
                setSearchQuery,
            }}
        >
            <div style={{ minHeight: mainHeight }}>
                <Header />
                <Content />
            </div>
        </GlobalContext.Provider>
    );
}

export default index;
