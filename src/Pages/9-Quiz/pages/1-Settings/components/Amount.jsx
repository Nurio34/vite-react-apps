import { useDispatch, useSelector } from "react-redux";
import { setAmount, setAmountSetting } from "../../../../../Store/quiz";

function Amount({}) {
    const { amount } = useSelector((s) => s.quiz);

    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setAmount(e.target.value));
        dispatch(setAmountSetting(e.target.value));
    };

    return (
        <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Amount of Questions"
            className="py-1 px-2"
            onChange={onChange}
        />
    );
}

export default Amount;
