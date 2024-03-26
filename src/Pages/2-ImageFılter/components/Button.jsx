import React from "react";
import { genres } from "../genres";
import { useMoviesContext } from "..";

function Button() {
    const { setGenre } = useMoviesContext();

    return (
        <div className="  gap-[1vw]  px-[4vw] flex flex-wrap">
            {genres.map((genre) => {
                return (
                    <button
                        onClick={(e) => setGenre(e.target.id)}
                        key={genre.id}
                        id={genre.id}
                        className=" py-1 px-2 bg-green-500 rounded-md grow "
                    >
                        {genre.name}
                    </button>
                );
            })}
        </div>
    );
}

export default Button;
