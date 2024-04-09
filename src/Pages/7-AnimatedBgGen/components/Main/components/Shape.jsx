import { useEffect, useState } from "react";
import "./index.scss";

function Shape({ shapeRange, animationTime, backgroundColors }) {
    const [leftPosition, setLeftPosition] = useState(null);
    const randomLeftPosition = Math.random() * 90;

    const [topPosition, setTopPosition] = useState(null);
    const randomTopPosition = Math.random() * 90;

    const randomShapeRange = Math.floor(Math.random() * 50);

    const randomTime = Math.floor(Math.random() * 10);

    //! ------------------------

    const randomBg = Math.floor(Math.random() * backgroundColors.length);

    useEffect(() => {
        setLeftPosition(90 - randomLeftPosition);
        setTopPosition(200 - randomTopPosition);
    }, []);

    return (
        <div
            className="shape absolute w-16 aspect-square"
            style={{
                bottom: 0,
                left: `${leftPosition}%`,
                top: `${topPosition}%`,
                background: backgroundColors[randomBg],
                borderRadius: `${randomShapeRange - shapeRange}%`,
                "--second": `${randomTime + animationTime}s`,
            }}
        ></div>
    );
}

export default Shape;
