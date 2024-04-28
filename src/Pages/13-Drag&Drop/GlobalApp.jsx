import { createContext, useContext, useEffect, useState } from "react";

const DragnDropContext = createContext();
export const useDragnDropContext = () => useContext(DragnDropContext);

const GlobalApp = ({ children }) => {
    const [task, setTask] = useState({
        task: "",
        subjects: [],
        category: "todo",
    });

    const [status, setStatus] = useState({});
    useEffect(() => {
        const time = setTimeout(() => {
            setStatus({});
        }, 1500);

        return () => {
            clearTimeout(time);
        };
    }, [task]);

    const initialTasks = [
        {
            task: "todo 1",
            subjects: ["react", "html", "css", "javascript"],
            category: "todo",
            id: 1,
            index: 0,
        },
        {
            task: "todo 2",
            subjects: ["css", "javascript"],
            category: "todo",
            id: 2,
            index: 1,
        },
        {
            task: "todo 3",
            subjects: ["javascript", "react"],
            category: "todo",
            id: 3,
            index: 2,
        },
        {
            task: "doing 1",
            subjects: ["react"],
            category: "doing",
            id: 4,
            index: 0,
        },
        {
            task: "doing 2",
            subjects: ["javascript", "css"],
            category: "doing",
            id: 5,
            index: 1,
        },
        {
            task: "doing 3",
            subjects: ["html", "css"],
            category: "doing",
            id: 6,
            index: 2,
        },
        {
            task: "done 1",
            subjects: ["javascript", "html"],
            category: "done",
            id: 7,
            index: 0,
        },
        {
            task: "done 2",
            subjects: ["javascript"],
            category: "done",
            id: 8,
            index: 1,
        },
        {
            task: "done 3",
            subjects: ["html", "css"],
            category: "done",
            id: 9,
            index: 2,
        },
    ];
    const [tasks, setTasks] = useState(initialTasks);
    const [draggen, setDraggen] = useState(null);

    const [isDropped, setIsDropped] = useState(false);
    useEffect(() => {
        setIsDropped(false);
    }, [isDropped]);

    return (
        <DragnDropContext.Provider
            value={{
                task,
                setTask,
                tasks,
                setTasks,
                status,
                setStatus,
                draggen,
                setDraggen,
                isDropped,
                setIsDropped,
            }}
        >
            {children}
        </DragnDropContext.Provider>
    );
};

export default GlobalApp;
