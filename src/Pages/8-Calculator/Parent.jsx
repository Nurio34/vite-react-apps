import Shape from "./Shape";

export function Parent() {
    return (
        <div className="parent" style={{ opacity: 1, backgroundColor: "blue" }}>
            {[...Array(+20)].map((_, index) => {
                return (
                    <Shape
                        key={index}
                        shapeRange={10}
                        animationTime={1}
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
