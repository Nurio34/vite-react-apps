import { motion } from "framer-motion";

function Component({ ind }) {
    return (
        <motion.div
            className=" border border-black p-1 text-white"
            style={{
                backgroundColor: `rgb(${ind * 3},${ind * 6},${ind * 9})`,
            }}
            initial={{ x: ind % 2 === 0 ? 1000 : -1000 }}
            animate={{ x: 0 }}
            transition={{ delay: ind * 0.1, duration: 1 }}
        >
            Component
        </motion.div>
    );
}

export default Component;
