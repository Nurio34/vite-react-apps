import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <h2>Projects</h2>
            <ul
                className=" grid grid-cols-3  py-[1vh] px-[1vw] text-purple-600 underline underline-offset-2 text-xs 
                md:text-base md:grid-cols-4 lg:grid-cols-5 lg:text-lg xl:grid-cols-6 xl:text-xl
            "
            >
                <li>
                    <Link to="/react_projects/currency_converter">
                        Currency Converter
                    </Link>
                </li>
                <li>
                    <Link to="/react_projects/filter_animation">
                        Filter Animation
                    </Link>
                </li>
                <li>
                    <Link to="/react_projects/instagram_filters">
                        Instagram Filters
                    </Link>
                </li>
                <li>
                    <Link to="/react_projects/unsplash_search">
                        Unsplash Search
                    </Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
