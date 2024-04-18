import { AnimatePresence, Reorder, useDragControls } from "framer-motion";
import { useFilesContext } from "../GlobalApp";
import File from "./File";
import UploadButton from "./UploadButton";
import Status from "./Status";

function Files() {
    const { files, setFiles } = useFilesContext();

    const controls = useDragControls();

    return (
        <article className=" grid gap-4">
            {files.length > 0 && (
                <>
                    <Reorder.Group
                        className=" bg-gray-500 grid gap-4 p-4 md:grid-cols-2"
                        values={files}
                        onReorder={setFiles}
                        as="ol"
                    >
                        <AnimatePresence>
                            {files.map((file) => (
                                <Reorder.Item
                                    key={file.lastModified}
                                    value={file}
                                    initial={{ x: -16, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 16, opacity: 0 }}
                                    // dragListener={false}
                                    // dragControls={controls}
                                >
                                    <File file={file} controls={controls} />
                                </Reorder.Item>
                            ))}
                        </AnimatePresence>
                    </Reorder.Group>
                    <UploadButton />
                    <Status />
                </>
            )}
        </article>
    );
}

export default Files;
