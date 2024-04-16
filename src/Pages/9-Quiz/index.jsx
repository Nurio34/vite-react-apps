import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Settings from "./pages/1-Settings";
import Quiz from "./pages/2-Quiz";
import Result from "./pages/3-Result";

function QuizApp() {
    const { mainHeight } = useSelector((s) => s.components);

    // const { isLoading, data, error } = useAxios(
    //     "/api_token.php/?command=request",
    // );
    // console.log(data);

    return (
        <section
            className="QuizApp bg-gradient-to-br from-orange-100 to-orange-600 grid place-content-center"
            style={{ minHeight: mainHeight }}
        >
            <Routes>
                <Route index element={<Settings />} />
                <Route path="/questions" element={<Quiz />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </section>
    );
}

export default QuizApp;
