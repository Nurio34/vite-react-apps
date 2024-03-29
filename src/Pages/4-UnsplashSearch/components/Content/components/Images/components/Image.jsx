import { saveAs } from "file-saver";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useGlobalContext } from "../../../../..";

function Image({ id, urls, ind }) {
    const { searchQuery } = useGlobalContext();

    const handleClick = (e) => {
        const src = e.target.src;
        saveAs(src, `${searchQuery}_${id}.jpg`);
        console.log(src);
    };

    return (
        <motion.figure
            onDoubleClick={handleClick}
            className=" aspect-square overflow-hidden cursor-pointer "
            whileHover={{
                scale: 1.1,
            }}
            initial={{ x: "-100vw" }}
            animate={{
                x: 0,
                transition: {
                    delay: 0.4 / (ind + 1),
                },
            }}
            exit={{
                x: "100vw",
            }}
        >
            <img
                src={urls.small}
                alt=""
                className=" w-full h-full object-cover"
            />
        </motion.figure>
    );
}

export default Image;
