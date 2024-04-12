import Categories from "../Categories";
import Generators from "../Generators";
import QRCode from "../QRCode";
import "./index.scss";

function Container() {
    return (
        <article className="Container my-[2vh] w-[clamp(320px,90vw,785px)] md:-translate-y-1/2 grid grid-cols-2 md:grid-cols-3 place-content-start">
            <Categories />
            <Generators />
            <QRCode />
        </article>
    );
}

export default Container;
