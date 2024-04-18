import { createContext, useContext, useState } from "react";

const TasksContext = createContext();
export const useFilesContext = () => useContext(TasksContext);

function GlobalApp({ children }) {
    const [files, setFiles] = useState([]);
    console.log(files);

    return (
        <TasksContext.Provider value={{ files, setFiles }}>
            {children}
        </TasksContext.Provider>
    );
}

export default GlobalApp;
