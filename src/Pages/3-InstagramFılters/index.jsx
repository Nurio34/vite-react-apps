import { useSelector } from "react-redux";
import Filter from "./components/Filter";
import Image from "./components/Image";
import "./index.scss";
import { createContext, useContext, useRef, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function index() {
    const { mainHeight } = useSelector((s) => s.components);

    const [imageSrc, setImageSrc] = useState();

    const [instaFilter, setInstaFilter] = useState();
    const [customFilter, setCustomFilter] = useState({});

    const customFilterCSS = Object.entries(customFilter)
        .map(([key, value]) => {
            if (key === "blur") {
                return `${key}(${value}px)`;
            } else if (key === "hue-rotate") {
                return `${key}(${value}deg)`;
            } else if (key === "drop-shadow") {
                return `${key}(0px 0px ${value}px white) `;
            }
            return `${key}(${value}%)`;
        })
        .join(" ");

    const ImageEl = useRef();

    return (
        <GlobalContext.Provider
            value={{
                imageSrc,
                setImageSrc,
                instaFilter,
                setInstaFilter,
                customFilter,
                setCustomFilter,
                customFilterCSS,
                ImageEl,
            }}
        >
            <section
                className="InstagramFilter grid place-content-start sm:place-content-center px-[4vw] select-none"
                style={{ minHeight: mainHeight }}
            >
                <h2
                    className=" text-xl font-semibold uppercase text-center py-[4vh] lg:min-w-[1000px]"
                    style={{ fontVariant: "small-caps" }}
                >
                    Filter Your Images with default instagram filters or your
                    custom filters
                </h2>
                <div className=" grid sm:grid-cols-2 gap-[4vw] lg:max-w-[1000px]">
                    <Image />
                    <Filter />
                </div>
            </section>
        </GlobalContext.Provider>
    );
}

export default index;
