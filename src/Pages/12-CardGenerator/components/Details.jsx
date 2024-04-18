import { useState } from "react";
import Settings from "./Settings";

function Details() {
    const [showSettinsBtn, setShowSettinsBtn] = useState(false);
    const onMouseEnter = () => setShowSettinsBtn(true);
    const onMouseLeave = () => setShowSettinsBtn(false);

    return (
        <div
            className="relative"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <p contentEditable spellCheck="false" className=" outline-none">
                Details
            </p>
            {showSettinsBtn && <Settings />}
        </div>
    );
}

export default Details;
