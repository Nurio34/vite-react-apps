import Image from "./Image";
import Heading from "./Heading";
import Details from "./Details";
import Button from "./Button";
import "../index.scss";
import { useCardGeneratorContext } from "../GlobalApp";

function Card() {
    const { CardElement } = useCardGeneratorContext();

    return (
        <>
            <article
                className="Card bg-white  rounded-md w-80  p-4 grid gap-4"
                id="capture"
                ref={CardElement}
            >
                <Image />
                <Heading />
                <Details />
            </article>

            <Button />
        </>
    );
}

export default Card;
