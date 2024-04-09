import { useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function Color({ item, setBackgroundColors }) {
    const CloseButton = useRef();

    return (
        <span
            className=" flex items-center"
            onMouseEnter={(e) => {
                if (CloseButton.current) {
                    CloseButton.current.classList.remove("hidden");
                }
            }}
            onMouseLeave={(e) => {
                if (CloseButton.current) {
                    CloseButton.current.classList.add("hidden");
                }
            }}
        >
            "{item}"
            <button
                type="button"
                ref={CloseButton}
                className="hidden"
                onClick={(e) => {
                    setBackgroundColors((pre) => {
                        return pre.filter((color) => color !== item);
                    });
                }}
            >
                <AiFillCloseCircle color={"red"} size={20} />
            </button>
        </span>
    );
}

export default Color;
