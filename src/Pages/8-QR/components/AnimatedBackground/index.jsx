import { useSelector } from "react-redux";
import Shape from "./Shape.jsx";
import { useQR } from "../../GlobalApp.jsx";

function Parent() {
    return (
        <div
            className="parent"
            style={{
                opacity: 0.2,
                backgroundColor: "rgb(30,58,138)",
            }}
        >
            {[...Array(+100)].map((_, index) => {
                return (
                    <Shape
                        key={index}
                        shapeRange={0}
                        animationTime={10}
                        colors={[
                            "red",
                            "green",
                            "blue",
                            "orange",
                            "yellow",
                            "pink",
                            "purple",
                            "white",
                            "gray",
                            "black",
                        ]}
                    />
                );
            })}
        </div>
    );
}

export default Parent;
