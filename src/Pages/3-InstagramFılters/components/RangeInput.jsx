import React from "react";
import { useGlobalContext } from "..";

function RangeInput({ filter, value }) {
    const { imageSrc, customFilter, setCustomFilter } = useGlobalContext();

    const defaultValue =
        filter === "contrast"
            ? 100
            : filter === "opacity"
            ? 100
            : filter === "brightness"
            ? 100
            : filter === "saturate"
            ? 100
            : 0;

    return (
        <label htmlFor="" className=" grid grid-cols-[0.6fr,1fr]">
            <span className=" capitalize">{filter}</span>
            <input
                value={customFilter[filter] || defaultValue}
                max={value}
                type="range"
                name={filter}
                id={filter + "Inp"}
                className={`${
                    !imageSrc ? "pointer-events-none" : "pointer-events-auto"
                }`}
                onChange={(e) =>
                    setCustomFilter((pre) => ({
                        ...pre,
                        [filter]: e.target.value,
                    }))
                }
            />
        </label>
    );
}

export default RangeInput;
