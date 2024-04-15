import { useSelector } from "react-redux";
import Settings from "./pages/1-Settings";
import { Route, Routes } from "react-router-dom";
import useAxios from "./hooks/useAxios";

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
            </Routes>
        </section>
    );
}

export default QuizApp;
