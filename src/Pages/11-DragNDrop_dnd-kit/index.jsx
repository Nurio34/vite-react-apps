import { useSelector } from "react-redux";
import GlobalApp from "./GlobalApp";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function DragNDrop() {
    const { mainHeight } = useSelector((s) => s.components);

    return (
        <GlobalApp>
            <section
                style={{ minHeight: mainHeight }}
                className="bg-red-100 w-[clamp(320px,90vw,768px)] m-auto "
            >
                <h1
                    className=" text-center font-bold text-xl capitalize pt-4"
                    style={{ fontVariant: "small-caps" }}
                >
                    Task Menager ( @dnd/toolkit)
                </h1>
                <AddTask />
                <Tasks />
            </section>
        </GlobalApp>
    );
}

export default DragNDrop;
