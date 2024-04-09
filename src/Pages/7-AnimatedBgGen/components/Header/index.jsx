import { useEffect, useRef, useState } from "react";
import { Bug } from "../../../../assets/icons";
import { typeAnimation } from "../../../../functions/functions/typeAnimation";
import "../../../../functions/styles/index.css";
import ThemeChange from "../Header/ThemeChange/ThemeChange";
import { useGlobalContext } from "../../GlobalApp";
import "./index.scss";
import img from "../../../../assets/AnimatedBgGen-SuggestedStructure.png";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
    const LogoElement = useRef();

    const { isThemeLight } = useGlobalContext();

    useEffect(() => {
        if (LogoElement.current) {
            typeAnimation("Animated Background Generator", LogoElement.current);
        }
    }, []);

    const filter = isThemeLight ? "purple" : "yellow";

    const [isImgDisplay, setIsImgDisplay] = useState(false);

    function toggleImg() {
        setIsImgDisplay(!isImgDisplay);
    }

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

            <div className=" relative">
                <button
                    className="AnimatedBgGen-SuggestBtn text-xl font-semibold "
                    style={{ "--filter": filter }}
                    onClick={toggleImg}
                >
                    Suggested Folder Structure
                </button>
                <AnimatePresence>
                    {isImgDisplay && (
                        <motion.figure
                            className=" absolute z-50"
                            initial={{
                                y: -16,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: 16,
                                opacity: 0,
                            }}
                        >
                            <img src={img} alt="" />
                        </motion.figure>
                    )}
                </AnimatePresence>
            </div>

            <ThemeChange />
        </header>
    );
}

export default Header;
