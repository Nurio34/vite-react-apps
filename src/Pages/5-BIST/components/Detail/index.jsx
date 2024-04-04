import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../GlobalApp";
import "../Detail/index.scss";
import TabButon from "./components/TabButon";
import Details from "./components/Details";
import { useEffect, useState } from "react";

function index() {
    const location = useLocation();
    let stock = location.state;

    const { stocks } = useGlobalContext();
    stock = stocks.length > 0 && stocks.filter((obj) => obj.id === stock)[0];

    const { id, name } = stock;

    const tabs = stock?.financials?.map((obj) => obj.year);

    const initialYear = stock.financials && parseInt(stock.financials[0].year);

    const [year, setYear] = useState();

    useEffect(() => setYear(initialYear), [initialYear]);

    return (
        <section className="Bist-Detail px-[4vh] py-[4vh]">
            <h2 className=" Header" style={{ fontVariant: "small-caps" }}>
                <span>{id}</span>
                <span className=" text-xs pl-[2vw]">{name}</span>
            </h2>
            <article className="py-[1vh]">
                <div className="Tabs flex flex-wrap">
                    {tabs?.map((tab) => {
                        return (
                            <TabButon key={tab} tab={tab} setYear={setYear} />
                        );
                    })}
                </div>
                <Details stock={stock} year={year} />
            </article>
        </section>
    );
}

export default index;
