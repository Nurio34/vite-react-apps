import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <h2>Projects</h2>
            <ul>
                <li>
                    <Link to="/react_projects/currency_converter">
                        Currency Converter
                    </Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
