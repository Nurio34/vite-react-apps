import { useGlobalContext } from "..";
import { instaFilters } from "../instaFilters";

function InstagramFilter() {
    const { setInstaFilter } = useGlobalContext();

    return (
        <div>
            <select
                name="instaFilter"
                id="instaFilterSelect"
                className=" w-full bg-blue-200 p-1 rounded-md"
                onChange={(e) => setInstaFilter(e.target.value)}
            >
                {instaFilters.map((filter) => (
                    <option key={filter.name} value={filter.css}>
                        {filter.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default InstagramFilter;
