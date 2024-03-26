import { useSelector } from "react-redux";
import Filter from "./components/Filter";
import Image from "./components/Image";
import "./index.scss";

function index() {
    const { mainHeight } = useSelector((s) => s.components);

    return (
        <section
            className="InstagramFilter grid place-content-start sm:place-content-center px-[4vw]"
            style={{ minHeight: mainHeight }}
        >
            <h2
                className=" text-xl font-semibold uppercase text-center py-[4vh] md:min-w-[1000px]"
                style={{ fontVariant: "small-caps" }}
            >
                Filter Your Images with default instagram filters or your custom
                filters
            </h2>
            <div className=" grid sm:grid-cols-2">
                <Image />
                <Filter />
            </div>
        </section>
    );
}

export default index;
