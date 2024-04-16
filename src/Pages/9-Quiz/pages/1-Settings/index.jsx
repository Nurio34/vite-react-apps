import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Amount from "./components/Amount";
import Selection from "./components/Selection";
import { useSelector } from "react-redux";

function Settings() {
    const { isLoading, data, error } = useAxios("/api_category.php");

    const selections = [
        {
            id: "category",
            options: data.trivia_categories,
        },
        {
            id: "difficulty",
            options: [
                {
                    id: "easy",
                    name: "Easy",
                },
                {
                    id: "medium",
                    name: "Medium",
                },
                {
                    id: "hard",
                    name: "Hard",
                },
            ],
        },
        {
            id: "type",
            options: [
                {
                    id: "multiple",
                    name: "Multiple Choice",
                },
                {
                    id: "boolean",
                    name: "True / False",
                },
            ],
        },
    ];

    const { categorySetting, difficultySetting, typeSetting, amountSetting } =
        useSelector((s) => s.quiz);

    const settings =
        amountSetting + categorySetting + difficultySetting + typeSetting;

    const navigate = useNavigate();
    const Start_Quiz = (e) => {
        e.preventDefault();
        navigate("/vite-react-projects/quiz/questions", { state: settings });
    };

    return (
        <article className="Settings padding grid gap-[4vh] ">
            <h1
                className="header text-center"
                style={{ fontVariant: "small-caps" }}
            >
                Quiz App
            </h1>
            <form className="grid gap-[2vh]" onSubmit={Start_Quiz}>
                {selections.map((selection) => (
                    <Selection
                        key={selection.id}
                        id={selection.id}
                        options={selection.options}
                    />
                ))}
                <Amount />
                <button
                    type="submit"
                    className="bg-blue-500 text-white padding2 font1 "
                    style={{ fontVariant: "small-caps" }}
                >
                    Lets Quiz
                </button>
            </form>
        </article>
    );
}

export default Settings;
