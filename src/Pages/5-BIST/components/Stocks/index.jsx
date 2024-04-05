import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../GlobalApp";
import Stock from "./components/Stock";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { goTopOfPage } from "../../../../functions/goTopOfPage";

function Stocks() {
    const { sortBy } = useGlobalContext();
    // console.log(sortBy);

    const Button = useRef();

    const handleScroll = (e) => {
        if (Button.current) {
            if (window.scrollY >= 1000) {
                Button.current.classList.remove("hidden");
            } else {
                Button.current.classList.add("hidden");
            }
        }
    };

    useEffect(() => {
        goTopOfPage();

        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="Stocks grid gap-[4vh] justify-center px-[4vw] py-[4vh]">
            {sortBy.map((stock) => {
                if (stock.id) {
                    return <Stock key={stock.id} stock={stock} />;
                }
            })}

            <button
                className=" rounded-full  text-white bg-orange-500 fixed bottom-0 right-0 -translate-x-1/2 -translate-y-1/2 hidden"
                style={{ fontVariant: "small-caps" }}
                ref={Button}
                onClick={goTopOfPage}
            >
                <FaArrowAltCircleUp size={32} color="black" />
            </button>
        </section>
    );
}

export default Stocks;
