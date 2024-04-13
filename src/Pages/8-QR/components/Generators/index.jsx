import UploadLogo from "../UploadLogo";
import Form from "./Form";
import ColorPicker from "./ColorPicker";
import { useQR } from "../../GlobalApp";
import { motion } from "framer-motion";
import { useRef } from "react";

function Generators() {
    const { body, fetchData } = useQR();

    const FormElement = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        if (FormElement.current && FormElement.current.checkValidity()) {
            fetchData();
        }
    };

    return (
        <div className="md:col-start-1 col-span-2 padding1 grid gap-[2vh]">
            <UploadLogo />
            <form
                className="Generators grid"
                onSubmit={onSubmit}
                ref={FormElement}
            >
                <Form />
                <ColorPicker />
                <motion.button
                    disabled={!body.url}
                    type="submit"
                    className=" bg-blue-500 text-white padding2 rounded-md justify-self-end self-center disabled:bg-gray-100 disabled:text-gray-400"
                    whileHover={{
                        scale: body.url && 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onSubmit}
                >
                    Generate QRCode
                </motion.button>
            </form>
        </div>
    );
}

export default Generators;
