import React, {
    useContext,
    useEffect,
    useMemo,
    useState,
    createContext,
    memo,
} from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../../Hooks/useFetch";
import Movies from "./components/Movies";
import Button from "./components/Button";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";
const url = "http://localhost:3000/openai/images";

const MoviesContext = createContext();
export const useMoviesContext = () => useContext(MoviesContext);

function Index() {
    const { mainHeight = "100%" } = useSelector((s) => s.components);
    const { header } = useSelector((s) => s.components);
    if (header) {
        header.children[0].textContent = "npm-framer-motion";
    }

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [genre, setGenre] = useState(0);
    const [detail, setDetail] = useState({});

    const url = useMemo(() => {
        return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc';
        `;
    }, [page]);
    const options = useMemo(
        () => ({
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            },
        }),
        [],
    );
    const { data, loading, error } = useFetch(url, options);
    console.log(data);
    useEffect(() => {
        if (data) {
            setMovies((pre) => [...pre, [...data.results]]);
        }
    }, [data]);

    return (
        <MoviesContext.Provider
            value={{ movies, genre, setGenre, detail, setDetail }}
        >
            <section className=" py-[2vh] " style={{ minHeight: mainHeight }}>
                <Button />
                <AnimatePresence>
                    <Movies />
                </AnimatePresence>
                <div className=" flex justify-center">
                    <button
                        className="py-1 px-[4vw] bg-blue-600 text-white"
                        onClick={(e) => setPage((pre) => pre + 1)}
                    >
                        Load More
                    </button>
                </div>
                <Modal />
            </section>
        </MoviesContext.Provider>
    );
}

export default memo(Index);
