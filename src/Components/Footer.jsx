import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className=" bg-white">
            <h2>Projects</h2>
            <ul
                className=" grid grid-cols-3  py-[1vh] px-[1vw] text-purple-600 underline underline-offset-2 text-xs 
                md:text-base md:grid-cols-4 lg:grid-cols-5 lg:text-lg xl:grid-cols-6 xl:text-xl
            "
            >
                <li>
                    <Link to="/vite-react-projects/currency_converter">
                        Currency Converter
                    </Link>
                </li>
                <li>
                    <Link to="/vite-react-projects/filter_animation">
                        Filter Animation
                    </Link>
                </li>
                <li>
                    <Link to="/vite-react-projects/instagram_filters">
                        Instagram Filters
                    </Link>
                </li>
                <li>
                    <Link to="/vite-react-projects/unsplash_search">
                        Unsplash Search
                    </Link>
                </li>
                <li>
                    <Link to="/vite-react-projects/bist">BIST</Link>
                </li>
                <li>
                    <Link to="/vite-react-projects/image-to-text">
                        Image-to-Text
                    </Link>
                </li>
                <li>
                    <Link to="/vite-react-projects/animatedbggen">
                        AnimatedBgGen
                    </Link>
                </li>
                <li>
                    <Link to="/vite-react-projects/qr">QR</Link>
                </li>
                <li>
                    <Link to="/vite-react-projects/quiz">Quiz</Link>
                </li>
                <li>
                    <Link to="/vite-react-projects/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/vite-react-projects/dragndrop">
                        Drag&Drop(dnd-kit)
                    </Link>
                </li>
                <li>
                    <Link to="/vite-react-projects/dragndrop-fm">
                        Drag&Drop(FramerMotion)
                    </Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
