import { useGlobalContext } from "../../GlobalApp";
import { Code } from "../../../../assets/icons";
import ThemeChange from "./ThemeChange/ThemeChange";
import { useEffect, useRef } from "react";
import { typeAnimation } from "../../../../functions/functions/typeAnimation";
import "../../../../functions/styles/index.css";

function index() {
    const { isThemeLight } = useGlobalContext();

    const LogoElement = useRef();

    useEffect(() => {
        if (LogoElement.current) {
            typeAnimation("MarkdownBlog", LogoElement.current);
        }
    }, []);

    return (
        <header
            className={` flex justify-between items-center padding transition
            ${isThemeLight ? "bg-white text-black" : " bg-black text-white"}
        `}
        >
            <div className="Logo flex items-center gap-1">
                <span>
                    <Code />
                </span>
                <span className=" font-semibold text-lg" ref={LogoElement}>
                    MarkDownBlog
                </span>
            </div>
            <ThemeChange />
        </header>
    );
}

export default index;
