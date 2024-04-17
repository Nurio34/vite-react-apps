import { createContext, useContext, useState } from "react";

const DndContext = createContext();
export const useDndContext = () => useContext(DndContext);

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

    return (
        <DndContext.Provider value={{ tasks, setTasks }}>
            {children}
        </DndContext.Provider>
    );
}

export default GlobalApp;
