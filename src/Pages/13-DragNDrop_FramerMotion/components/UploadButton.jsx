import { motion } from "framer-motion";
import { useFilesContext } from "../GlobalApp";

function UploadButton() {
    const { files } = useFilesContext();

    const uploadFiles = (e) => {};

    return (
        <motion.button
            className="py-1 px-4 bg-orange-500 text-white justify-self-center rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={uploadFiles}
        >
            UploadButton
        </motion.button>
    );
}

export default UploadButton;
