import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../GlobalApp";
import "../Detail/index.scss";
import TabButon from "./components/TabButon";
import Details from "./components/Details";
import { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import Search from "../Search";
import { goTopOfPage } from "../../../../functions/functions/goTopOfPage";

function index() {
    const location = useLocation();
    const { stocks } = useGlobalContext();

    const [stockId, setStockId] = useState(location.state);

    const stock =
        stocks.length > 0 && stocks.filter((obj) => obj.id === stockId)[0];

    const id = stock && stock.id;
    const name = stock && stock.name;

    const tabs = stock && stock?.financials?.map((obj) => obj.year);

    const initialYear =
        stock?.financials && parseInt(stock?.financials[0].year);

    const [year, setYear] = useState();

    useEffect(() => setYear(initialYear), [initialYear]);

    useEffect(() => {
        goTopOfPage();
    }, []);

    const onSubmitFn = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        formData = Object.fromEntries(formData);
        const { search } = formData;
        setStockId(search.toLowerCase());
        e.currentTarget.reset();
    };

    // const onChange = (e) => {
    //     console.log(e.target.value);
    //     const search = e.target.value.toLowerCase();
    //     setStockId(search);
    // };

    return (
        <section className="Bist-Detail px-[4vh] py-[4vh] ">
            <div className="flex  items-center justify-between gap-[4vh]">
                <Link
                    to="/react_projects/bist"
                    className=" inline-flex gap-[1vw] items-center rounded-md px-[4vw] py-[1vh] bg-blue-500 text-white capitalize"
                    style={{ fontVariant: "small-caps" }}
                >
                    <span>
                        <IoArrowBackCircle size={24} />
                    </span>
                    <span>Hisseler</span>
                </Link>
                <Search onSubmit={onSubmitFn} />
            </div>
            <h2
                className=" header pt-[4vh]"
                style={{ fontVariant: "small-caps" }}
            >
                <span>{id}</span>
                <span className=" text-xs pl-[2vw]">{name}</span>
            </h2>
            <article className="py-[1vh]">
                <div className="Tabs flex flex-wrap">
                    {tabs &&
                        tabs.length > 0 &&
                        tabs.map((tab) => {
                            return (
                                <TabButon
                                    key={tab}
                                    tab={tab}
                                    year={year}
                                    setYear={setYear}
                                />
                            );
                        })}
                </div>
                <Details stock={stock} year={year} />
            </article>
        </section>
    );
}

export default index;
