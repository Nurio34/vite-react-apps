import { useTasksContext } from "../GlobalApp";
import Task from "./Task";
import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function Tasks() {
    const { tasks } = useTasksContext();

    return (
        <article>
            <ul className=" bg-gray-500 grid gap-4 p-4">
                <SortableContext
                    items={tasks}
                    strategy={verticalListSortingStrategy}
                >
                    {tasks.map((task) => (
                        <Task key={task.id} {...task} />
                    ))}
                </SortableContext>
            </ul>
        </article>
    );
}

export default Tasks;
