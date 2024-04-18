import { useState } from "react";
import { useTasksContext } from "../GlobalApp";

function AddTask() {
    const { tasks, setTasks } = useTasksContext();

    const [task, setTask] = useState();

    const onSubmit = (e) => {
        e.preventDefault();

        if (task) {
            setTasks((tasks) => [
                ...tasks,
                {
                    id: tasks.length + 1,
                    task,
                },
            ]);

            setTask("");
        }
    };

    return (
        <form
            className=" border border-black flex w-8/12 mx-auto rounded-md overflow-hidden my-4"
            onSubmit={onSubmit}
        >
            <input
                type="text"
                name=""
                id=""
                className="grow w-1 outline-none px-2"
                onChange={(e) => setTask(e.target.value)}
                value={task}
            />
            <button type="submit" className="bg-green-500 text-white py-1 px-4">
                Add
            </button>
        </form>
    );
}

export default AddTask;
