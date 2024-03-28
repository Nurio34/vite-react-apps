import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Component from "./Component";

function index() {
    const { mainHeight } = useSelector((s) => s.components);
    const arr = [...Array(20)];
    return (
        <div className="p-[4vw] bg-blue-100" style={{ minHeight: mainHeight }}>
            <motion.h1
                // initial={{ x: -100 }}
                // animate={{ x: 0, rotate: 360 }}
                // transition={{ duration: 2 }}
                className=" text-center font-bold text-2xl shadow-xl"
            >
                {" "}
                Heading
            </motion.h1>
            <div className="grid gap-1">
                {arr.map((item, ind) => {
                    return <Component key={ind} ind={ind} />;
                })}
            </div>
        </div>
    );
}

export default index;
