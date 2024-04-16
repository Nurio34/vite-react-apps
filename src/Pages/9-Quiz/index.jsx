import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Settings from "./pages/1-Settings";
import Quiz from "./pages/2-Quiz";

function QuizApp() {
    const { mainHeight } = useSelector((s) => s.components);

    // const { isLoading, data, error } = useAxios(
    //     "/api_token.php/?command=request",
    // );
    // console.log(data);

    return (
        <section
            className="QuizApp bg-red-100"
            style={{ minHeight: mainHeight }}
        >
            <Routes>
                <Route index element={<Settings />} />
                <Route path="/questions" element={<Quiz />} />
            </Routes>
        </section>
    );
}

export default QuizApp;
