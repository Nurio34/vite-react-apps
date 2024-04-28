import React, { useState } from "react";
import { useDragnDropContext } from "../../GlobalApp";

const DropArea = ({ category, index }) => {
    const { draggen, tasks, setTasks, setIsDropped } = useDragnDropContext();

    const [showDragArea, setShowDragArea] = useState(false);

    const onDrop = (draggen, category, index) => {
        const task = {
            ...tasks.filter((task) => task.id === draggen)[0],
            index,
        };
        task.category = category;

        setTasks((tasks) => {
            return [...tasks.filter((task) => task.id !== draggen), task];
        });
    };

    return (
        <div
            className={` transition-all
        ${showDragArea ? " h-[130px]" : "h-[32px]"}
    `}
            onDragEnter={(e) => setShowDragArea(true)}
            onDragLeave={(e) => setShowDragArea(false)}
            onDragOver={(e) => {
                e.preventDefault();
            }}
            onDrop={(e) => {
                e.preventDefault();
                onDrop(draggen, category, index);
                setShowDragArea(false);

                setIsDropped(true);
            }}
        ></div>
    );
};

export default DropArea;
