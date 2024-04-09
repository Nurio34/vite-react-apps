import { useEffect, useRef } from "react";
import { Bug } from "../../../../assets/icons";
import { typeAnimation } from "../../../../functions/functions/typeAnimation";
import "../../../../functions/styles/index.css";
import ThemeChange from "../Header/ThemeChange/ThemeChange";
import { useGlobalContext } from "../../GlobalApp";

function Header() {
    const LogoElement = useRef();

    const { isThemeLight } = useGlobalContext();

    useEffect(() => {
        if (LogoElement.current) {
            typeAnimation("Animated Background Generator", LogoElement.current);
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
                    <Bug />
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

export default Header;
