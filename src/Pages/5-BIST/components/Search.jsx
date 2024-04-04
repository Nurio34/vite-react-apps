import React from "react";
import { useGlobalContext } from "../GlobalApp";

function Search({ onSubmit, onChange }) {
    const { stocks } = useGlobalContext();
    console.log(stocks);

    return (
        <form
            className=" border border-black rounded-[100vw] overflow-hidden flex justify-start"
            onSubmit={onSubmit}
        >
            <label htmlFor="searchInput" className="w-1/2 grow">
                <input
                    type="search"
                    name="search"
                    id="searchInput"
                    className=" bg-green-200 py-[1vh] px-[2vw] outline-none w-full capitalize"
                    style={{ fontVariant: "small-caps" }}
                    list="stockList"
                    onChange={onChange}
                />
                <datalist id="stockList">
                    {stocks.map((stock) => {
                        return (
                            <option
                                key={stock.id}
                                value={stock?.id?.toUpperCase()}
                                className=" capitalize"
                                style={{ fontVariant: "small-caps" }}
                            >
                                {stock?.name}
                            </option>
                        );
                    })}
                </datalist>
            </label>
            <button type="submit" className=" bg-blue-200  py-[1vh] px-[2vw] ">
                Ara
            </button>
        </form>
    );
}

export default Search;
