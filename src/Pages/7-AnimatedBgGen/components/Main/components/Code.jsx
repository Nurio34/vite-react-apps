import { compiler } from "markdown-to-jsx";
import { useGlobalContext } from "../../../GlobalApp";
import { BsCopy } from "react-icons/bs";
import { useRef } from "react";

function Code({ code }) {
    const { isThemeLight } = useGlobalContext();

    const CodeElement = useRef();

    function copyCode() {
        if (CodeElement.current) {
            const code = CodeElement.current.querySelector("code").textContent;
            navigator.clipboard.writeText(code);
        }
    }

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
            {compiler(code())}
        </div>
    );
}

export default Code;
