import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMainHeight } from "../Store/components";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/0-Home";
import CurrencyConerter from "../Pages/1-CurrencyConverter";

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
        <main style={{ minHeight: mainHeight }}>
            <Routes>
                <Route path="/react_projects" element={<Home />} />
                <Route
                    path="/react_projects/currency_converter"
                    element={<CurrencyConerter />}
                />
            </Routes>
        </main>
    );
}

export default Main;
