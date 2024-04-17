import { useSelector } from "react-redux";
import contactBg_png from "../../assets/contactBg.jpeg";
import contactBg_webp from "../../assets/contactBg.webp";
import Form from "./components/Form";
import FormHeader from "./components/FormHeader";
import GlobalApp from "./GlobalApp";

function Contact() {
    const { mainHeight } = useSelector((s) => s.components);

    return (
        <GlobalApp>
            <section
                className="Contact grid place-content-center bg-gradient-to-b from-purple-200 to-purple-500"
                style={{ minHeight: mainHeight }}
            >
                <figure
                    style={{ maxWidth: mainHeight }}
                    className="grid grid-cols-[repeat(14,1fr)] grid-rows-[repeat(30,1fr)]"
                >
                    <img
                        src={contactBg_webp}
                        className="w-full col-span-full row-span-full"
                        alt=""
                    />
                    <div className="Form col-start-3 col-end-13 row-start-9 row-end-[22] ">
                        <FormHeader />
                        <Form />
                    </div>
                </figure>
            </section>
        </GlobalApp>
    );
}

export default Contact;
