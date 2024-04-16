import { useDispatch } from "react-redux";
import { resetGame } from "../../../../Store/quiz";
import { useNavigate } from "react-router-dom";

function Result() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClick = (e) => {
        dispatch(resetGame());
        navigate("/vite-react-projects/quiz/");
    };

    return (
        <div>
            Result
            <button type="button" onClick={onClick}>
                Reset
            </button>
        </div>
    );
}

export default Result;
