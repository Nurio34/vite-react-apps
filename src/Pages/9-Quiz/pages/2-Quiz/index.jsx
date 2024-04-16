import { useLocation } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { decode } from "html-entities";

function Quiz() {
    const location = useLocation();
    const url = location.state;

    const { isLoading, data, error } = useAxios(url);
    console.log(data);

    const [questionIndex, setQuestionIndex] = useState(0);

    if (isLoading) {
        return <p>Loading...</p>;
    } else if (error) {
        return <p>Error...</p>;
    } else {
        return (
            <article>
                <h1>Question 1</h1>
                <form>
                    {data?.results.map((question, index) => {
                        if (questionIndex === index) {
                            return (
                                <div>
                                    <p>{decode(question.question)}</p>
                                    //TODO : burda kaldım
                                </div>
                            );
                        }
                    })}
                </form>
                <p>Score : 0 / 10</p>
            </article>
        );
    }
}

export default Quiz;
