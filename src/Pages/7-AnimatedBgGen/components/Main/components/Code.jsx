import { compiler } from "markdown-to-jsx";
import { useGlobalContext } from "../../../GlobalApp";
import { BsCopy } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Code({ code }) {
    const { isThemeLight } = useGlobalContext();

    const CodeElement = useRef();

    const [isCodeCopied, setIsCodeCopied] = useState(false);

    function copyCode() {
        if (CodeElement.current) {
            const code = CodeElement.current.querySelector("code").textContent;
            navigator.clipboard.writeText(code);
            setIsCodeCopied(true);
        }
    }

    useEffect(() => {
        let time;

        if (isCodeCopied) {
            time = setTimeout(() => {
                setIsCodeCopied(false);
            }, 1000);
        }

        return () => {
            clearTimeout(time);
        };
    }, [isCodeCopied]);

    const Div = () => {
        return <div>Hello</div>;
    };

    return (
        <div
            className={`ParentCode padding max-w-80 max-h-24 overflow-auto relative  ${
                isThemeLight
                    ? " bg-white text-black"
                    : " bg-gray-800 text-white"
            }`}
            ref={CodeElement}
        >
            <BsCopy
                color={isThemeLight ? "blue" : "yellow"}
                className="absolute right-0  top-0 -translate-x-1/2 translate-y-1/2  cursor-pointer "
                style={{
                    filter: `drop-shadow(0 0 2px ${
                        isThemeLight ? "blue" : "yellow"
                    }) drop-shadow(0 0 4px ${
                        isThemeLight ? "blue" : "yellow"
                    }) `,
                }}
                onClick={copyCode}
            />

            <AnimatePresence>
                {isCodeCopied && (
                    <motion.div
                        className=" bg-green-500 text-white absolute right-0 p-1 rounded-md"
                        initial={{
                            x: -16,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        exit={{
                            x: 16,
                            opacity: 0,
                        }}
                    >
                        Code Copied
                    </motion.div>
                )}
            </AnimatePresence>

            {compiler(code(), {
                overrides: {
                    Code: {
                        component: Div,
                    },
                },
            })}
        </div>
    );
}

export default Code;
