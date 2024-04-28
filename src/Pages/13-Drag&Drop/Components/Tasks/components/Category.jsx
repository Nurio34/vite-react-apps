import React, { useEffect, useState } from "react";
import { useDragnDropContext } from "../../../GlobalApp";
import Task from "./Task";
import DropArea from "../../DropArea";

const Category = ({ category }) => {
    const [categoryTasks, setCategoryTasks] = useState([]);

    const { tasks, setTasks, draggen, isDropped } = useDragnDropContext();
    useEffect(() => {
        setCategoryTasks(tasks.filter((task) => task?.category === category));
    }, [tasks]);

    // useEffect(() => {
    //     //! --- DROP THE TASK IN THE RİGHT PLACE ---

    //     const droppedTask = categoryTasks.filter(
    //         (task) => task?.id === draggen,
    //     )[0];

    //     if (droppedTask) {
    //         const tasksBeforeIt = categoryTasks.filter(
    //             (task) => task?.index < droppedTask?.index,
    //         );

    //         let tasksAfterIt = categoryTasks
    //             .filter(
    //                 (task) =>
    //                     task?.id !== droppedTask?.id &&
    //                     task?.index >= droppedTask?.index,
    //             )
    //             .map((task) => {
    //                 return { ...task, index: task.index + 1 };
    //             });

    //         const reorderedTasks = []
    //             .concat(tasksBeforeIt)
    //             .concat(droppedTask)
    //             .concat(tasksAfterIt)
    //             .flat();

    //         setCategoryTasks(reorderedTasks);

    //         console.log(reorderedTasks);
    //     }
    // }, [isDropped]);

    const deleteTask = (id) => {
        setTasks((tasks) => {
            return tasks.filter((task) => task?.id !== id);
        });
    };

    return (
        <ul className=" grid content-start">
            <h2
                className=" font-bold text-2xl capitalize"
                style={{ fontVariant: "small-caps" }}
            >
                {category}
            </h2>
            {categoryTasks
                .sort((task1, task2) => task1.index - task2.index)
                .map((task, index) => {
                    return (
                        <div key={index}>
                            <DropArea category={task?.category} index={index} />
                            <Task task={task} deleteTask={deleteTask} />
                        </div>
                    );
                })}
            <DropArea category={category} index={categoryTasks.length} />
        </ul>
    );
};

export default Category;
