import { useSelector } from "react-redux";
import GlobalApp from "./GlobalApp";
import Card from "./components/Card";

function CardGenerator() {
    const { mainHeight } = useSelector((s) => s.components);

    return (
        <GlobalApp>
            <section
                className="CardGenerator bg-blue-50 grid justify-center place-content-start gap-4 py-[2vh] md:place-content-center md:py-0"
                style={{ minHeight: mainHeight }}
            >
                <Card />
            </section>
        </GlobalApp>
    );
}

export default CardGenerator;
