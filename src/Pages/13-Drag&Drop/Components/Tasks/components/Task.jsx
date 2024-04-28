import React from "react";
import { useDragnDropContext } from "../../../GlobalApp";

const Task = ({ task, deleteTask }) => {
    const { draggen, setDraggen } = useDragnDropContext();

    return (
        <li
            className=" border border-orange-500 rounded-lg p-4 grid gap-2
        active:opacity-50 active:border-gray-500 active:bg-orange-100
        "
            draggable
            onDragStart={(e) => setDraggen(task?.id)}
            // onDragEnd={(e) => setDraggen(null)}
            onDrop={(e) => {
                e.preventDefault();
                console.log(e);
            }}
        >
            <p>{task?.task}</p>
            <div className="flex items-center justify-start gap-2 ">
                {task?.subjects.map((subject, ind) => {
                    return (
                        <span
                            key={ind}
                            style={{ fontVariant: "small-caps" }}
                            className={` text-white p-1 text-xs capitalize rounded-md
                                    ${
                                        subject === "html"
                                            ? " bg-orange-600"
                                            : subject === "css"
                                            ? " bg-blue-400"
                                            : subject === "javascript"
                                            ? " bg-yellow-500"
                                            : " bg-blue-600"
                                    }
                                `}
                        >
                            {subject}
                        </span>
                    );
                })}
            </div>
            <button
                className=" py-1 px-2 font-semibold bg-red-500 justify-self-end text-white rounded-md"
                onClick={(e) => deleteTask(task?.id)}
            >
                Delete
            </button>
        </li>
    );
};

export default Task;
