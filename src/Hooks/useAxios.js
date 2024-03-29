import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useAxios = (url, options) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchData = useCallback(async () => {
        setLoading(true);

        try {
            const res = await axios(url, options);
            setData(res.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [url, options]);

    useEffect(() => {
        fetchData(url, options);
    }, [url, options]);

    return {
        data,
        loading,
        error,
    };
};
