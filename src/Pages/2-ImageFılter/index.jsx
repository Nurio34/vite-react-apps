import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
const url = "http://localhost:3000/openai/images";

function index() {
    const { mainHeight = "100%" } = useSelector((s) => s.components);

    const makeCall = async () => {
        const res = await axios.post(url);
        console.log(res);
    };

    return (
        <section className=" bg-red-100" style={{ minHeight: mainHeight }}>
            <button onClick={makeCall}>Call</button>
        </section>
    );
}

export default index;
