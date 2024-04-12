import React from "react";
import Form from "./Form";
import ColorPicker from "./ColorPicker";
import { useQR } from "../../GlobalApp";
import { motion } from "framer-motion";

function Generators() {
    const { body, fetchData } = useQR();

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form
            className="Generators md:col-start-1 col-span-2 padding1 grid gap-[2vh]"
            onSubmit={onSubmit}
        >
            <Form />
            <ColorPicker />
            <motion.button
                disabled={!body.url}
                type="submit"
                className=" bg-blue-500 text-white padding2 rounded-md justify-self-end self-center disabled:bg-gray-100 disabled:text-gray-400"
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                onClick={fetchData}
            >
                Generate QRCode
            </motion.button>
        </form>
    );
}

export default Generators;
