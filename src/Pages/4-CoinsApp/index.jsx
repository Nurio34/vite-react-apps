import { Link, Route, Routes } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
export const url = (route) => `https://api.coingecko.com/api/v3${route}`;
import Home from "./pages/Home";
import Details from "./pages/Details";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function index() {
    const [id, setId] = useState();
    const [trendings, setTrendings] = useState({});
    console.log(id);
    const route = "/search/trending";
    const { data, loading, error } = useFetch(url(route));

    useEffect(() => {
        if (data) setTrendings(data);
    }, [route, data]);

    return (
        <section>
            <GlobalContext.Provider
                value={{ id, setId, trendings, setTrendings }}
            >
                <Link to="/react_projects/coins_app/">Home</Link>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path={`/${id}`} element={<Details />} />
                </Routes>
            </GlobalContext.Provider>
        </section>
    );
}

export default index;
