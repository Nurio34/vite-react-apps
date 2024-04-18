import { IoIosCloseCircleOutline } from "react-icons/io";
import { RxDragHandleDots1 } from "react-icons/rx";
import { useFilesContext } from "../GlobalApp";
import { useState } from "react";

function File({ file, controls }) {
    const { setFiles } = useFilesContext();
    const { lastModified } = file;

    const deleteFile = () => {
        setFiles((files) =>
            files.filter((file) => file.lastModified !== lastModified),
        );
    };

    //!---

    const [showDeleteBtn, setShowDeleteBtn] = useState(false);

    //! ---

    return (
        <div
            className=" flex gap-2 items-center bg-white p-2 touch-none relative"
            onContextMenu={(e) => {
                e.preventDefault();
                setShowDeleteBtn(!showDeleteBtn);
            }}
        >
            <input type="checkbox" name="" id="" />
            <p>{file.name}</p>
            {showDeleteBtn && (
                <button
                    type="button"
                    className=" bg-red-500 rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
                    onClick={(e) => {
                        deleteFile();
                        setShowDeleteBtn(!showDeleteBtn);
                    }}
                >
                    <IoIosCloseCircleOutline size={24} color="white" />
                </button>
            )}
            <RxDragHandleDots1
                className=" ml-auto cursor-grab"
                size={24}
                color="gray"
                // onPointerDown={(e) => controls.start(e)}
            />
        </div>
    );
}

export default File;
