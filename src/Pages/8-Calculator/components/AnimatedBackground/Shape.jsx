import { useState, useEffect } from "react";
import "./index.scss";

function Shape({ shapeRange, animationTime, colors }) {
    const [leftPosition, setLeftPosition] = useState(null);
    const randomLeftPosition = Math.random() * 90;
    const randomTopPosition = Math.random() * 90;
    const randomShapeRange = Math.floor(Math.random() * 50);
    const randomTime = Math.floor(Math.random() * 20);
    const randomBg = Math.floor(Math.random() * colors.length);

    useEffect(() => {
        setLeftPosition(90 - randomLeftPosition);
    }, []);

    return (
        <div
            className="shape"
            style={{
                bottom: `-${10 + randomTopPosition}%`,
                left: `${leftPosition}%`,
                background: colors[randomBg],
                borderRadius: `${randomShapeRange - shapeRange}%`,
                "--second": `${randomTime * animationTime}s`,
            }}
        ></div>
    );
}

export default Shape;
