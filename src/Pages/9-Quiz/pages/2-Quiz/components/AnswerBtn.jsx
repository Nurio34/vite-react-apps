import { decode } from "html-entities";
import { useEffect, useRef } from "react";

function AnswerBtn({ answer, index, chosenAnswer, setChosenAnswer }) {
    const Btn = useRef();

    const onClickAnswer = (btn) => {
        setChosenAnswer(index);
    };

    useEffect(() => {
        if (index === chosenAnswer && Btn.current) {
            Btn.current.className =
                "bg-gradient-to-r from-green-100 to-green-600 text-white";
            Btn.current.style.fontVariant = "small-caps";
        } else {
            Btn.current.className =
                "bg-gradient-to-r from-blue-100 to-blue-600";
            Btn.current.style.fontVariant = "";
        }
    }, [chosenAnswer]);

    return (
        <button
            type="button"
            ref={Btn}
            className="AnswerBtn bg-gradient-to-r from-blue-100 to-blue-600"
            style={{ fontVariant: "" }}
            onClick={(e) => {
                onClickAnswer(e.target);
            }}
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            exit={{ x: 200 }}
        >
            {decode(answer)}
        </button>
    );
}

export default AnswerBtn;
