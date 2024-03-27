import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "..";
import "../../../instagram.min.css";

function ImageBox() {
    const { imageSrc, setImageSrc, ImageEl } = useGlobalContext();

    const FileInput = useRef();

    const uploadFile = () => {
        if (FileInput.current) {
            FileInput.current.click();
        }
    };

    const handleImage = (e) => {
        const url = URL.createObjectURL(e.target.files[0]);
        setImageSrc(url);
    };

    // ! ------------------------------------------

    const { instaFilter } = useGlobalContext();
    const { customFilterCSS } = useGlobalContext();

    return (
        <div className="ImageBox aspect-square bg-gray-500 grid place-content-center rounded-md">
            {imageSrc ? (
                <figure
                    className={`${instaFilter} w-full h-full aspect-square`}
                    style={{ filter: customFilterCSS }}
                    ref={ImageEl}
                    onDoubleClick={(e) => {
                        setImageSrc("");
                    }}
                >
                    <img
                        src={imageSrc}
                        alt=""
                        className=" w-full h-full rounded-md "
                    />
                </figure>
            ) : (
                <label
                    htmlFor="uploadFile"
                    className="TransBtn relative py-[2vh] px-[4vw] bg-green-400 rounded-md cursor-pointer hover:scale-105 active:scale-100 transition"
                    onClick={uploadFile}
                >
                    <span>Upload Image</span>
                    <input
                        type="file"
                        name="upload"
                        id="upluadFile"
                        className=" opacity-0 absolute"
                        ref={FileInput}
                        onChange={handleImage}
                        accept="image/*"
                        multiple
                    />
                </label>
            )}
        </div>
    );
}

export default ImageBox;
