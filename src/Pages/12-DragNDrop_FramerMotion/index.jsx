import { useSelector } from "react-redux";
import GlobalApp from "./GlobalApp";
import AddFile from "./components/AddFile";
import Files from "./components/Files";

function DragNDrop() {
    const { mainHeight } = useSelector((s) => s.components);

    return (
        <GlobalApp>
            <section
                style={{ minHeight: mainHeight }}
                className="bg-red-100 w-[clamp(320px,90vw,768px)] m-auto p-4"
            >
                <h1
                    className=" text-center font-bold text-xl  pt-4"
                    style={{ fontVariant: "small-caps" }}
                >
                    <span className=" text-orange-500">F</span>ile{" "}
                    <span className=" text-orange-500">M</span>enager
                </h1>
                <AddFile />
                <Files />
            </section>
        </GlobalApp>
    );
}

export default DragNDrop;
