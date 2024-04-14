import { useCallback, useEffect, useState } from "react";
import Tesseract from "tesseract.js";
import { useGlobalContext } from "../../../GlobalApp";
import { BsClipboard2, BsClipboard2Check } from "react-icons/bs";

function Converted({ urls, setIsProcess, coppied, setCoppied }) {
    const [texts, setTexts] = useState([]);
    const { isThemeLight } = useGlobalContext();

    function convert(url) {
        Tesseract.recognize(url, ["tur", "eng"], {
            logger: (m) => {
                // console.log(m),
                setIsProcess(true);
            },
        }).then(({ data: { text } }) => {
            setTexts((pre) => [...pre, text]);
            setIsProcess(false);
        });
    }

    useEffect(() => {
        urls.forEach((url) => convert(url));
    }, [urls]);

    function copyTexts() {
        navigator.clipboard.writeText(texts);
        console.log("ok");
        setCoppied(true);
    }

    return (
        texts.length > 0 && (
            <article>
                <ul className=" grid py-[2vh] gap-[2vh] max-h-[50vh] overflow-auto">
                    <button
                        type="button"
                        className=" justify-self-end w-7 aspect-square rounded-full bg-green-500 grid place-content-center "
                        onClick={copyTexts}
                    >
                        {!coppied && <BsClipboard2 />}
                        {coppied && <BsClipboard2Check />}
                    </button>
                    {texts.map((text, ind) => (
                        <li key={ind}>
                            <p
                                className={` px-[4vw]
                                ${
                                    isThemeLight
                                        ? "bg-pink-100"
                                        : " bg-pink-700"
                                }`}
                            >
                                {text}
                            </p>
                        </li>
                    ))}
                </ul>
            </article>
        )
    );
}

export default Converted;
