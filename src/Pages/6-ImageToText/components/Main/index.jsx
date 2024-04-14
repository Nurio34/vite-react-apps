import { useSelector } from "react-redux";
import { useGlobalContext } from "../../GlobalApp";
import Converter from "./components/Converter";
import { useEffect, useState } from "react";
import Converted from "./components/Converted";

function index() {
    const { mainHeight } = useSelector((s) => s.components);

    const { isThemeLight } = useGlobalContext();

    const [urls, setUrls] = useState([]);
    const [isProcess, setIsProcess] = useState(false);

    const [coppied, setCoppied] = useState(false);
    console.log(coppied);
    useEffect(() => {
        setCoppied(false);
    }, [urls]);

    return (
        <section
            style={{ minHeight: mainHeight }}
            className={` padding grid place-content-start gap-[2vh]
            ${isThemeLight ? "bg-white text-black" : "bg-black text-white"}`}
        >
            <h1
                className="font1 py-[4vh]"
                style={{ fontVariant: "small-caps" }}
            >
                Get the <strong className=" text-orange-500">Text</strong> in{" "}
                <strong className=" text-green-500">Image</strong> files
            </h1>

            <Converter urls={urls} setUrls={setUrls} isProcess={isProcess} />
            <Converted
                urls={urls}
                setIsProcess={setIsProcess}
                coppied={coppied}
                setCoppied={setCoppied}
            />
        </section>
    );
}

export default index;
