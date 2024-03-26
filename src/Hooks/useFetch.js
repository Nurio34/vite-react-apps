import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useFetch = (url, options) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetchData = useCallback(async () => {
        try {
            const res = await axios(url, options);

            if (res.status !== 200) {
                setError(res.statusText);
                return;
            }

            const data = res.data;
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [url, options]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error };
};
