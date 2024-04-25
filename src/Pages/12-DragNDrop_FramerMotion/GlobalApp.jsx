import { createContext, useContext, useState } from "react";

const TasksContext = createContext();
export const useFilesContext = () => useContext(TasksContext);

function GlobalApp({ children }) {
    const [files, setFiles] = useState([]);
    const [progress, setProgress] = useState({ started: false, pc: 0 });
    const [msg, setMsg] = useState(null);

    return (
        <TasksContext.Provider
            value={{ files, setFiles, progress, setProgress, msg, setMsg }}
        >
            {children}
        </TasksContext.Provider>
    );
}

export default GlobalApp;
