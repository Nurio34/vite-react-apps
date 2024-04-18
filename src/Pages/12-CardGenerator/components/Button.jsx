import { motion } from "framer-motion";
import { useCardGeneratorContext } from "../GlobalApp";
import html2canvas from "html2canvas";

function Button() {
    const { CardElement } = useCardGeneratorContext();
    const capture = document.querySelector("#capture");

    const onClick = () => {
        html2canvas(document.querySelector("#capture")).then((canvas) => {
            document.body.appendChild(canvas);
        });
    };

    return (
        <motion.button
            type="button"
            className=" bg-gradient-to-r from-blue-300 to-blue-800 text-white py-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
        >
            Snapshot
        </motion.button>
    );
}

export default Button;
