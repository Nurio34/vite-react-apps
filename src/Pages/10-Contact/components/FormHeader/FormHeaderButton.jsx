import { useContactContext } from "../../GlobalApp";

function FormHeaderButton({ object }) {
    const { topic } = object;
    const { currentStep, setCurrentStep } = useContactContext();

    return (
        <button
            type="button"
            className={`text-sm md:text-base capitalize underline underline-offset-2
                ${
                    currentStep === topic &&
                    " text-purple-500  font-semibold md:font-bold"
                }
            `}
            style={{ fontVariant: "small-caps" }}
            onClick={(e) => setCurrentStep(topic)}
        >
            {object.topic}
        </button>
    );
}

export default FormHeaderButton;
