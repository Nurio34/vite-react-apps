import { useFilesContext } from "../GlobalApp";
import { FaCloudUploadAlt } from "react-icons/fa";

function AddFile() {
    const { setFiles } = useFilesContext();

    const handleFiles = (e) => {
        const files = [...e.target.files];
        files.forEach((file) => {
            setFiles((files) => [...files, file]);
        });
        e.target.value = "";
    };

    return (
        <label
            htmlFor="file"
            className="grid justify-center bg-orange-500 py-4 mx-16 my-8"
        >
            <FaCloudUploadAlt
                size={36}
                className=" justify-self-center"
                color="white"
            />
            <p className="text-white "> Upload Your Files</p>
            <input
                type="file"
                name="file"
                id="file"
                className={`hidden`}
                onChange={handleFiles}
                multiple
            />
        </label>
    );
}

export default AddFile;
