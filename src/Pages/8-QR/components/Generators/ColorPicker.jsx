import React from "react";
import { useQR } from "../../GlobalApp";
import { color } from "framer-motion";

function ColorPicker() {
    const { body, setBody } = useQR();

    return (
        <div>
            <h2 className="font1" style={{ fontVariant: "small-caps" }}>
                Color
            </h2>
            <div className=" flex gap-4">
                <input
                    type="color"
                    name="colorPicker"
                    id="colorPicker"
                    onBlur={(e) =>
                        setBody((pre) => ({ ...pre, color: e.target.value }))
                    }
                />
                <p className="font1 " style={{ color: body.color }}>
                    {body.color}
                </p>
            </div>
        </div>
    );
}

export default ColorPicker;
