import { useEffect, useState } from "react";
import { useGlobalContext } from "../../GlobalApp";
import Stock from "./components/Stock";

function Stocks() {
    const { sortBy } = useGlobalContext();
    // console.log(sortBy);

    return (
        <section className="Stocks grid gap-[4vh] justify-center px-[4vw] py-[4vh]">
            {sortBy.map((stock) => {
                if (stock.id) {
                    return <Stock key={stock.id} stock={stock} />;
                }
            })}
        </section>
    );
}

export default Stocks;
