import Shape from "./Shape.jsx";

export function Parent() {
    return (
        <div
            className="parent"
            style={{ opacity: 1, backgroundColor: "rgb(30,58,138)" }}
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
                            "#73ff00",
                        ]}
                    />
                );
            })}
        </div>
    );
}

export default Parent;
