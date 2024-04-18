import { useRef, useState } from "react";
import imgPH from "../../../assets/imgPH.webp";

function Image() {
    const [isUploaded, setIsUploaded] = useState(false);
    const [imgUrl, setImgUrl] = useState("");

    const FileInput = useRef();

    const onClick = () => {
        if (FileInput.current) {
            FileInput.current.click();
        }
    };

    const onChange = (e) => {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        setImgUrl(url);
    };

    return (
        <figure className="bg-orange-100 aspect-square rounded-xl overflow-hidden">
            <img
                src={!imgUrl ? imgPH : imgUrl}
                alt=""
                onClick={onClick}
                className=" w-full aspect-square object-cover"
            />

            <input
                type="file"
                name=""
                id=""
                ref={FileInput}
                className="hidden"
                onChange={onChange}
            />
        </figure>
    );
}

export default Image;
