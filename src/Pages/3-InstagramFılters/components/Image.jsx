import DownloadButton from "./DownloadButton";
import ImageBox from "./ImageBox";

function Image() {
    return (
        <article className="Image grid gap-[2vh]">
            <ImageBox />
            <DownloadButton />
        </article>
    );
}

export default Image;
