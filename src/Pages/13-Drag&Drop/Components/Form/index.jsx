import { useState } from "react";
import Categories from "./components/Categories";
import Subjects from "./components/Subjects";
import { Submit } from "./components/Submit";
import TaskInput from "./components/TaskInput";
import { useDragnDropContext } from "../../GlobalApp";

const index = () => {
    const { task, setTask, setTasks, setStatus } = useDragnDropContext();

    const addTask = (e) => {
        e.preventDefault();

        if (!task.task.trim() || task.subjects.length === 0) {
            setStatus({
                msg: "Please fill the form correctly.",
                color: "red",
            });
            return;
        } else {
            setStatus({
                msg: "Task's been added.",
                color: "green",
            });

            setTasks((tasks) => {
                return [
                    ...tasks,
                    {
                        ...task,
                        id: tasks.length + 1,
                        index: tasks.filter(
                            (item) => item.category === task.category,
                        ).length,
                    },
                ];
            });
            setTask({
                task: "",
                subjects: [],
                category: "todo",
            });
        }
    };

    return (
        <form
            className=" grid grid-cols-4 gap-x-4 gap-y-2 items-center border-b-gray-300 border-b pb-4"
            onSubmit={addTask}
        >
            <TaskInput />
            <Subjects />
            <Categories />
            <Submit />
        </form>
    );
};

export default index;
