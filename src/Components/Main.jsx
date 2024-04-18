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
import ImageToText from "../Pages/6-ImageToText";
import AnimatedBgGen from "../Pages/7-AnimatedBgGen";
import QR from "../Pages/8-QR";
import Quiz from "../Pages/9-Quiz";
import Contact from "../Pages/10-Contact";
import DragNDrop from "../Pages/11-DragNDrop";
import CardGenerator from "../Pages/12-CardGenerator";

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
                <Route path="/image-to-text/*" element={<ImageToText />} />
                <Route path="/animatedbggen/*" element={<AnimatedBgGen />} />
                <Route path="/qr/*" element={<QR />} />
                <Route path="/quiz/*" element={<Quiz />} />
                <Route path="/contact/*" element={<Contact />} />
                <Route path="/dragndrop/*" element={<DragNDrop />} />
                <Route path="/cardgenerator/*" element={<CardGenerator />} />
            </Routes>
        </main>
    );
}

export default Main;
