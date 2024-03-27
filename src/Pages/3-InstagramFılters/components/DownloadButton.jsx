import domToImg from "dom-to-image";
import { saveAs } from "file-saver";
import { useGlobalContext } from "..";
import { useCallback, useEffect } from "react";

function DownloadButton() {
    const { imageSrc, setImageSrc, ImageEl } = useGlobalContext();

    const download = useCallback(() => {
        if (ImageEl.current) {
            // console.log(ImageEl.current);
            domToImg
                .toBlob(ImageEl.current)
                .then((blob) => {
                    // console.log(blob);
                    saveAs(blob, "name.jpg");
                })
                .catch((error) => console.log(error))
                .finally(() => setImageSrc(""));
        }
    }, [imageSrc]);

    return (
        <button
            className="DownloadButton TransBtn bg-blue-500 text-white rounded-md py-[2vw] font-semibold "
            onClick={download}
        >
            <span>Download Image</span>
        </button>
    );
}

export default DownloadButton;
