import { useEffect, useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { ColorRing } from "react-loader-spinner";

function Converter({ urls, setUrls, isProcess }) {
    const onChange = (e) => {
        const files = [...e.target.files];
        const urls = files.map((file) => URL.createObjectURL(file));
        setUrls(urls);
    };

    const Button = useRef();

    const [size, setSize] = useState({});

    useEffect(() => {
        if (Button.current) {
            const btn = Button.current;
            const rect = btn.getBoundingClientRect();
            setSize({ width: rect.width, height: rect.height });
        }
    }, []);

    return (
        <div className=" flex items-center gap-1 ">
            <label
                htmlFor="file"
                className={`inline-flex items-center gap-1 padding  text-white ${
                    isProcess
                        ? "pointer-events-none cursor-default bg-gray-300 "
                        : "pointer-events-auto cursor-pointer bg-blue-500"
                }`}
                ref={Button}
                style={{ width: size.width, height: size.height }}
            >
                {!isProcess && (
                    <>
                        <FaCloudUploadAlt />
                        Upload
                    </>
                )}
                {isProcess && (
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={[
                            "#e15b64",
                            "#f47e60",
                            "#f8b26a",
                            "#abbd81",
                            "#849b87",
                        ]}
                    />
                )}
                <input
                    type="file"
                    name="file"
                    id="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={onChange}
                />
            </label>
            {urls.length > 0 && (
                <p className=" underline underline-offset-2 text-orange-500 font-semibold">
                    {urls.length} files
                </p>
            )}
        </div>
    );
}

export default Converter;
