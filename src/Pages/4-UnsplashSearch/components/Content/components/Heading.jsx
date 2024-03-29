import { useGlobalContext } from "../../..";

function Heading() {
    const { searchQuery } = useGlobalContext();

    return (
        <header>
            <h2 className="Header" style={{ fontVariant: "small-caps" }}>
                Results for {searchQuery}
            </h2>
        </header>
    );
}

export default Heading;
