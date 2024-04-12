import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMainHeight } from "../Store/components";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/0-Home";
import CurrencyConerter from "../Pages/1-CurrencyConverter";
import FilterAnimation from "../Pages/2-ImageFılter";
import InstagramFilter from "../Pages/3-InstagramFılters";
import UnsplashSearch from "../Pages/4-UnsplashSearch";
import BIST from "../Pages/5-BIST";
import MarkdownBlog from "../Pages/6-MarkdownBlog";
import AnimatedBgGen from "../Pages/7-AnimatedBgGen";
import QR from "../Pages/8-QR";

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
                <Route index element={<Home />} />
                <Route
                    path="/currency_converter"
                    element={<CurrencyConerter />}
                />
                <Route path="/filter_animation" element={<FilterAnimation />} />
                <Route
                    path="/instagram_filters"
                    element={<InstagramFilter />}
                />

                <Route path="/unsplash_search" element={<UnsplashSearch />} />
                <Route path="/bist/*" element={<BIST />} />
                <Route path="/markdownblog/*" element={<MarkdownBlog />} />
                <Route path="/animatedbggen/*" element={<AnimatedBgGen />} />
                <Route path="/qr/*" element={<QR />} />
            </Routes>
        </main>
    );
}

export default Main;
