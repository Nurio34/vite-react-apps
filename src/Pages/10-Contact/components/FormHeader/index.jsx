import { useContactContext } from "../../GlobalApp";
import { form } from "../../form";
import FormHeaderButton from "./FormHeaderButton";
import SendButton from "./SendButton";

function FormHeader() {
    const { currentStep } = useContactContext();

    return (
        <header className=" flex justify-start items-center gap-[2vw] px-[2vw] text-white   ">
            {form.map((object) => {
                return <FormHeaderButton key={object.topic} object={object} />;
            })}
            <SendButton />
        </header>
    );
}

export default FormHeader;
