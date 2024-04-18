import { useState } from "react";
import Settings from "./Settings";

function Heading() {
    const [showSettinsBtn, setShowSettinsBtn] = useState(false);
    const onMouseEnter = () => setShowSettinsBtn(true);
    const onMouseLeave = () => setShowSettinsBtn(false);

    return (
        <div
            className="relative"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <h1
                contentEditable
                spellCheck="false"
                className=" font-bold text-2xl capitalize outline-none"
                style={{ fontVariant: "small-caps" }}
            >
                Heading
            </h1>
            {showSettinsBtn && <Settings />}
        </div>
    );
}

export default Heading;
