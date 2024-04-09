import React, { useEffect, useState, useRef } from "react";
import Shape from "./components/Shape";
import { useGlobalContext } from "../../GlobalApp";
import Color from "./components/Color";
import Markdown, { compiler } from "markdown-to-jsx";

function index() {
    const { isThemeLight } = useGlobalContext();

    const [shapeAmount, setShapeAmount] = useState(20);

    const [shapeRange, setShapeRange] = useState(10);

    const [animationTime, setAnimationTime] = useState(1);

    const [backgroundColor, setBackgroundColor] = useState(null);
    const [backgroundColors, setBackgroundColors] = useState(["#ffffff"]);

    const backgroundArr = [
        "red",
        "green",
        "blue",
        "orange",
        "yellow",
        "pink",
        "purple",
        "white",
        "gray",
        "black",
    ];

    useEffect(() => {
        setBackgroundColors((pre) => {
            return [...pre, backgroundColor];
        });
    }, [backgroundColor]);

    const markdownText =
        "```javascript\n\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('world'));\n```";

    return (
        <section className=" relative">
            <div className="absolute z-10 top-0 left-0 grid gap-8">
                <div
                    className={`Panel 
                ${
                    isThemeLight
                        ? " bg-white text-black"
                        : " bg-gray-800 text-white"
                }
            `}
                >
                    <form className="Control padding grid gap-[1vh] max-w-[375px] ">
                        <label
                            htmlFor="count"
                            className="flex gap-4 font-semibold text-xl"
                        >
                            Count
                            <span>( {shapeAmount} )</span>
                        </label>
                        <input
                            type="range"
                            name="count"
                            id="count"
                            onChange={(e) => setShapeAmount(e.target.value)}
                            value={shapeAmount}
                        />
                        <label
                            htmlFor="shape"
                            className="flex gap-4 font-semibold text-xl"
                        >
                            Shape
                            <span>( {shapeRange} )</span>
                        </label>
                        <input
                            type="range"
                            max={50}
                            name="shape"
                            id="shape"
                            onChange={(e) => setShapeRange(e.target.value)}
                            value={shapeRange}
                        />
                        <label
                            htmlFor="speed"
                            className="flex gap-4 font-semibold text-xl"
                        >
                            Speed
                            <span>( {animationTime} )</span>
                        </label>
                        <input
                            type="range"
                            min={1}
                            max={10}
                            name="speed"
                            id="speed"
                            onChange={(e) => setAnimationTime(e.target.value)}
                            value={animationTime}
                        />
                        <label
                            htmlFor="background"
                            className="grid font-semibold text-xl"
                        >
                            BackgroundColor
                            <div className="flex justify-between items-center">
                                <input
                                    type="color"
                                    name="background"
                                    id="background"
                                    onBlur={(e) =>
                                        setBackgroundColor(e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    className=" font-medium bg-gray-200 text-sm py-[1px] px-[4px]"
                                    onClick={(e) => {
                                        setBackgroundColors(backgroundArr);
                                    }}
                                >
                                    Random
                                </button>
                            </div>
                        </label>
                        <div className=" flex flex-wrap gap-1">
                            {backgroundColors.map((item, ind) => {
                                if (item) {
                                    return (
                                        <Color
                                            key={item}
                                            item={item}
                                            setBackgroundColors={
                                                setBackgroundColors
                                            }
                                        />
                                    );
                                }
                            })}
                        </div>
                    </form>
                </div>

                <div
                    className={`Codes padding ${
                        isThemeLight
                            ? " bg-white text-black"
                            : " bg-gray-800 text-white"
                    }`}
                >
                    {compiler(markdownText)}
                </div>
            </div>

            <div
                className={`absolute min-w-full min-h-[83vh] overflow-hidden transition -z-1
                ${isThemeLight ? "bg-blue-200" : "bg-blue-900"}
            `}
            >
                {[...Array(+shapeAmount)].map((_, index) => {
                    return (
                        <Shape
                            key={index}
                            shapeRange={shapeRange}
                            animationTime={animationTime}
                            backgroundColors={backgroundColors}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default index;
