import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMainHeight } from "../Store/components";

function Main() {
    const { header, mainHeight } = useSelector((s) => s.components);
    const dispatch = useDispatch();

    useEffect(() => {
        const adjustMainHeight = () => {
            const headerHeight = header?.getBoundingClientRect().height;
            const pageHeight = window.innerHeight;
            dispatch(setMainHeight(pageHeight - headerHeight));
        };

        if (header) {
            adjustMainHeight();
            window.addEventListener("resize", adjustMainHeight);
        }

        return () => {
            window.removeEventListener("resize", adjustMainHeight);
        };
    }, [header]);

    return (
        <main className=" bg-pink-200" style={{ minHeight: mainHeight }}></main>
    );
}

export default Main;
