import { useGlobalContext } from "..";
import { customFilters } from "../customFilters";
import RangeInput from "./RangeInput";

function CustomFilter() {
    const { setCustomFilter } = useGlobalContext();

    return (
        <div>
            <div className=" space-y-4">
                {customFilters.map((filter) => {
                    if (filter === "hue-rotate") {
                        return (
                            <RangeInput
                                key={filter}
                                filter={filter}
                                value={180}
                            />
                        );
                    } else if (filter === "blur") {
                        return (
                            <RangeInput
                                key={filter}
                                filter={filter}
                                value={10}
                            />
                        );
                    } else if (filter === "drop-shadow") {
                        return (
                            <RangeInput
                                key={filter}
                                filter={filter}
                                value={30}
                            />
                        );
                    } else if (filter === "brightness") {
                        return (
                            <RangeInput
                                key={filter}
                                filter={filter}
                                value={1000}
                            />
                        );
                    } else if (filter === "grayscale") {
                        return (
                            <RangeInput
                                key={filter}
                                filter={filter}
                                value={100}
                            />
                        );
                    } else if (filter === "invert") {
                        return (
                            <RangeInput
                                key={filter}
                                filter={filter}
                                value={100}
                            />
                        );
                    } else if (filter === "opacity") {
                        return (
                            <RangeInput
                                key={filter}
                                filter={filter}
                                value={100}
                            />
                        );
                    } else if (filter === "saturate") {
                        return (
                            <RangeInput
                                key={filter}
                                filter={filter}
                                value={300}
                            />
                        );
                    } else if (filter === "sepia") {
                        return (
                            <RangeInput
                                key={filter}
                                filter={filter}
                                value={100}
                            />
                        );
                    }
                    return (
                        <RangeInput key={filter} filter={filter} value={300} />
                    );
                })}
            </div>
            <div className=" flex justify-center">
                <button
                    className=" mt-[1vh] py-[1vh] px-[4vw] bg-orange-500 TransBtn rounded-md"
                    onClick={(e) => setCustomFilter({})}
                >
                    Reset Filter
                </button>
            </div>
        </div>
    );
}

export default CustomFilter;
