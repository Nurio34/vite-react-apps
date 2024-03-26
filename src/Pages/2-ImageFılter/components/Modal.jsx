import React from "react";
import { useMoviesContext } from "..";

function Modal() {
    const { detail } = useMoviesContext();
    const {
        homepage,
        overview,
        production_companies,
        production_countries,
        release_date,
        backdrop_path,
        poster_path,
        vote_average,
        vote_count,
    } = detail;
    console.log(detail);

    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box grid">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt=""
                    className=" opacity-50 col-start-1 col-span-1 row-start-1 row-span-1 -z-10"
                />
                <div className=" font-bold col-start-1 col-span-1 row-start-1 row-span-1 p-1 grid place-content-center">
                    <a
                        href={homepage}
                        target="_blank"
                        className="  text-purple-700 underline underline-offset-2"
                    >
                        Go to Official Website
                    </a>
                    <p className="p-[3vw] text-center  text-lg">{overview}</p>
                    <div className=" flex justify-center gap-[2vw] flex-wrap">
                        {production_companies?.map((obj) => {
                            if (obj.logo_path) {
                                return (
                                    <img
                                        title={obj.name}
                                        src={`https://image.tmdb.org/t/p/w500/${obj.logo_path}`}
                                        alt={obj.name}
                                        className=" w-1/5 aspect-square object-contain"
                                    />
                                );
                            }
                        })}
                    </div>
                    <div className="  italic">
                        Production in{" "}
                        {production_countries?.map((obj, ind) => {
                            if (
                                production_countries.length > 1 &&
                                ind === production_countries.length - 1
                            ) {
                                return (
                                    <>
                                        <span>and </span>
                                        <span className=" underline underline-offset-2 px-1">
                                            {obj.name}
                                        </span>
                                    </>
                                );
                            } else if (
                                production_countries.length > 2 &&
                                ind < production_countries.length - 2
                            ) {
                                return (
                                    <span className=" underline underline-offset-2 px-1">
                                        {obj.name},{" "}
                                    </span>
                                );
                            }
                            return (
                                <span className=" underline underline-offset-2 px-1">
                                    {obj.name}{" "}
                                </span>
                            );
                        })}
                    </div>
                    <p className=" p-[2vh]">
                        Release on{" "}
                        <span className=" italic underline underline-offset-2">
                            {release_date?.split("-").reverse().join(".")}
                        </span>
                    </p>
                    <p className=" text-end">
                        {vote_average.toFixed(1)} Avarage by {vote_count} votes
                    </p>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}

export default Modal;
