import { useEffect, useState } from "react";
import { useGlobalContext } from "../../GlobalApp";
import Stock from "./components/Stock";

function Stocks() {
    const { stocks } = useGlobalContext();

    // console.log(totalAssetsRanks);

    return (
        <section className="Stocks">
            {stocks.map((stock) => {
                if (stock.id) {
                    return <Stock key={stock.id} stock={stock} />;
                }
            })}
        </section>
    );
}

export default Stocks;
