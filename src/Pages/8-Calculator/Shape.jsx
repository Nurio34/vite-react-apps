import "./shape.scss";
import React, { useEffect, useState } from "react";

function Shape({ shapeRange, animationTime, colors }) {
    const [leftPosition, setLeftPosition] = useState(null);
    const randomLeftPosition = Math.random() * 90;
    const [topPosition, setTopPosition] = useState(null);
    const randomTopPosition = Math.random() * 90;
    const randomShapeRange = Math.floor(Math.random() * 50);
    const randomTime = Math.floor(Math.random() * 10);
    const randomBg = Math.floor(Math.random() * colors.length);

    useEffect(() => {
        setLeftPosition(90 - randomLeftPosition);
        setTopPosition(200 - randomTopPosition);
    }, []);

    return (
        <div
            className="shape"
            style={{
                bottom: 0,
                left: `${leftPosition}%`,
                background: colors[randomBg],
                borderRadius: `${randomShapeRange - shapeRange}%`,
                "--second": `${randomTime + animationTime}s`,
            }}
        ></div>
    );
}

export default Shape;
