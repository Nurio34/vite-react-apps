import { useGlobalContext } from "../../GlobalApp";
import { Code } from "../../../../assets/icons";
import ThemeChange from "./ThemeChange/ThemeChange";
import { useEffect, useRef } from "react";
import { typeAnimation } from "../../../../utils/functions/typeAnimation";
import "../../../../utils/styles/index.css";

function index() {
    const { isThemeLight } = useGlobalContext();

    const LogoElement = useRef();

    useEffect(() => {
        if (LogoElement.current) {
            typeAnimation("ImageToText", LogoElement.current);
        }
    }, []);

    return (
        <header
            className={` flex justify-between items-center padding transition border-b-2
            ${
                isThemeLight
                    ? "bg-white text-black border-gray-500"
                    : " bg-black text-white border-white"
            }
        `}
        >
            <div className="Logo flex items-center gap-1">
                <span>
                    <Code />
                </span>
                <span
                    className=" font-semibold text-lg"
                    ref={LogoElement}
                ></span>
            </div>
            <ThemeChange />
        </header>
    );
}

export default index;
