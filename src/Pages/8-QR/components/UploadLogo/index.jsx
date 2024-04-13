import { useRef } from "react";
import { useQR } from "../../GlobalApp";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { motion } from "framer-motion";

function index() {
    const { uploadLogo } = useQR();

    const SubmitBtn = useRef();

    const onChange = (e) => {
        if (SubmitBtn.current) {
            SubmitBtn.current.click();
        }
    };

    const onSubmit = (e) => {
        console.log("Submitting...");
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        uploadLogo(formData);
    };

    return (
        <motion.form
            onSubmit={onSubmit}
            className=" bg-orange-500 text-white padding2 justify-self-start self-center flex items-center gap-2 rounded-md cursor-pointer"
            whileHover={{
                scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
        >
            <AiOutlineCloudUpload size={24} />
            <label htmlFor="file" className="cursor-pointer">
                Upload Logo
                <input
                    type="file"
                    name="userFile"
                    id="file"
                    className="hidden"
                    onChange={onChange}
                />
            </label>
            <button ref={SubmitBtn} type="submit"></button>
        </motion.form>
    );
}

export default index;
