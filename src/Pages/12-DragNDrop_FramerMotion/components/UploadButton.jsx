import { motion } from "framer-motion";
import { useFilesContext } from "../GlobalApp";
import axios from "axios";
const url = "https://httpbin.org/post";

function UploadButton() {
    const { files, setMsg, setProgress } = useFilesContext();

    const uploadFiles = (e) => {
        const file1 = files[0];
        const file = {
            file: file1,
        };

        axios
            .get(url, file, {
                headers: {
                    "Custom-Header": "value",
                },
            })
            .then((res) => console.log(res.data));

        console.log(file);
    };

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
