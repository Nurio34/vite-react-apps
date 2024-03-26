import { useEffect, useMemo, useState } from "react";
import { useMoviesContext } from "../index";
import { motion } from "framer-motion";
import { useFetch } from "../../../Hooks/useFetch";

function Movies() {
    const { movies, genre, detail, setDetail } = useMoviesContext();
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const Movies = filteredMovies?.flat();

    const [id, setId] = useState();

    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies]);

    useEffect(() => {
        const Movies = movies.flat();

        if (genre === "0") {
            setFilteredMovies(movies.flat());
        } else {
            setFilteredMovies(
                Movies.filter((movie) =>
                    movie.genre_ids.includes(parseInt(genre)),
                ),
            );
        }
    }, [genre]);

    const url = useMemo(() => {
        return `https://api.themoviedb.org/3/movie/${id}`;
    }, [id]);
    const options = useMemo(
        () => ({
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzQzMDY3ODM4ZWM4NWRhZDQ2ZmU5OTA3ZjVkNjgzNiIsInN1YiI6IjY0YzQyZDRjNjNhYWQyMDIwYjdhMTBiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_eETu-g7S7mYWK7bD3RPjY1ebtnTr9YnccaNi0WZhM",
            },
        }),
        [],
    );

    const { data, loading, error } = useFetch(url, options);

    useEffect(() => {
        if (data) {
            setDetail(data);
        }
    }, [data]);

    return (
        <div className=" px-[4vw] py-[4vh] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[1vw]">
            {Movies?.map((movie) => {
                return (
                    <motion.div
                        // key="modal"
                        key={movie.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className=" relative overflow-hidden rounded-md shadow-lg cursor-pointer"
                        onClick={() => {
                            document.getElementById("my_modal_2").showModal();
                            setId(movie.id);
                        }}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                            alt=""
                            className="transition hover:scale-110"
                        />
                        <p
                            className=" py-1 px-2 text-white absolute bottom-0 font-bold text-lg"
                            style={{ WebkitTextStroke: "1px black" }}
                        >
                            {movie.title}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default Movies;
