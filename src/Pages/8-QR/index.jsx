import { useSelector } from "react-redux";
import AnimatedBackground from "./components/AnimatedBackground";
import GlobalApp from "./GlobalApp";
import Container from "./components/Container";

function QR() {
    const { mainHeight } = useSelector((s) => s.components);

    return (
        <GlobalApp>
            <section
                style={{ minHeight: mainHeight }}
                className="QR grid justify-center md:place-content-center"
            >
                <AnimatedBackground />
                <Container />
            </section>
        </GlobalApp>
    );
}

export default QR;
