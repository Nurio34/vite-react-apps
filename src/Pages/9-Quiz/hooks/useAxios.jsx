import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = `https://opentdb.com/`;

function useAxios(url) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const fetchData = () =>
        axios
            .get(url)
            .then((res) => setData(res.data))
            .catch((err) => setError(Object.values({ ...err })[0]))
            .finally(() => setIsLoading(false));

    useEffect(() => {
        fetchData();
    }, []);

    return { isLoading, data, error };
}

export default useAxios;
