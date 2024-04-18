import { createContext, useContext, useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

const TasksContext = createContext();
export const useTasksContext = () => useContext(TasksContext);

function GlobalApp({ children }) {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: "Task1",
        },
        {
            id: 2,
            task: "Task2",
        },
        {
            id: 3,
            task: "Task3",
        },
    ]);

    const getTaskPosition = (id) => {
        return tasks.findIndex((task) => task.id === id);
    };

    const onDragEnd = (e) => {
        const { active, over } = e;

        if (active.id === over.id) return;

        setTasks((tasks) => {
            const startingPosition = getTaskPosition(active.id);
            const newPosition = getTaskPosition(over.id);
            return arrayMove(tasks, startingPosition, newPosition);
        });
    };

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            <DndContext
                collisionDetection={closestCorners}
                onDragEnd={onDragEnd}
            >
                {children}
            </DndContext>
        </TasksContext.Provider>
    );
}

export default GlobalApp;
