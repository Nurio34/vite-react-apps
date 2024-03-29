import { useGlobalContext } from "../../../..";
import Image from "./components/Image";
import Skeleton from "./components/Skeleton";
import { AnimatePresence, motion } from "framer-motion";

function index() {
    const { data, loading, error } = useGlobalContext();

    const imagesParent = {
        initial: {
            // opacity: 0,
        },
        animate: {
            // opacity: 1,

            transition: {
                when: "beforeChildren",
                // staggerChildren: 0.4,
            },
        },
    };

    return (
        <motion.div
            variants={imagesParent}
            initial="initial"
            animate="animate"
            className=" grid gap-[4vw] px-[4vw] py-[2vh] "
            style={{
                gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
            }}
        >
            <AnimatePresence>
                {!loading &&
                    data?.results?.map((item, ind) => (
                        <Image key={ind} {...item} ind={ind} />
                    ))}
            </AnimatePresence>
            {loading && [...Array(10)].map((_, ind) => <Skeleton key={ind} />)}
        </motion.div>
    );
}

export default index;
