import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useEffect, useRef, useState } from "react";
import { decode } from "html-entities";
import AnswerBtn from "./components/AnswerBtn";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setScore } from "../../../../Store/quiz";

function Quiz() {
    const navigate = useNavigate();

    const location = useLocation();
    const url = location.state;

    const { isLoading, data, error } = useAxios(url);

    const totalQuestions = useRef();
    useEffect(() => {
        totalQuestions.current = data?.results?.length;
    }, [data]);

    const [questionIndex, setQuestionIndex] = useState(0);

    const [question, setQuestion] = useState();
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState();
    const [chosenAnswer, setChosenAnswer] = useState();

    useEffect(() => {
        if (questionIndex === totalQuestions.current) {
            navigate("/vite-react-projects/quiz/result");
        }

        if (
            Object.values(data).length > 0 &&
            questionIndex < totalQuestions.current
        ) {
            setQuestion(data.results[questionIndex].question);
            setAnswers((pre) => {
                const incorrectAnswers =
                    data.results[questionIndex].incorrect_answers;
                const correctAnswer =
                    data.results[questionIndex].correct_answer;

                const randomNumber = Math.floor(
                    Math.random() * incorrectAnswers.length,
                );
                setCorrectAnswer(randomNumber);
                const answers = [].concat(
                    incorrectAnswers.slice(0, randomNumber),
                    correctAnswer,
                    incorrectAnswers.slice(randomNumber),
                );

                return answers;
            });
            setChosenAnswer(null);
        }
    }, [data, questionIndex]);

    const { score } = useSelector((s) => s.quiz);
    const dispatch = useDispatch();

    if (isLoading) {
        return <p>Loading...</p>;
    } else if (error) {
        return <p>Error...</p>;
    } else {
        return (
            <article
                className=" grid gap-2 padding w-[clamp(320px,90vw,768px)]"
                initial={{
                    x: -200,
                }}
                animate={{
                    x: 0,
                }}
                exit={{
                    x: 200,
                }}
            >
                <h1 className="font1">Question {questionIndex + 1} </h1>
                <p className="px-4">{decode(question)}</p>
                <div className=" grid gap-4 md:grid-cols-2">
                    {answers?.map((answer, index) => {
                        return (
                            <AnswerBtn
                                key={index}
                                answer={answer}
                                index={index}
                                chosenAnswer={chosenAnswer}
                                setChosenAnswer={setChosenAnswer}
                            />
                        );
                    })}
                </div>
                <button
                    type="button"
                    className="padding2 font1 bg-white text-orange-500 m-4 justify-self-center w-1/2"
                    onClick={(e) => {
                        if (chosenAnswer === correctAnswer) {
                            dispatch(setScore(0));
                        }
                        if (chosenAnswer) {
                            setQuestionIndex((pre) => pre + 1);
                        }
                    }}
                >
                    Answer
                </button>
                <p>
                    {score} / {totalQuestions.current}{" "}
                </p>
            </article>
        );
    }
}

export default Quiz;
