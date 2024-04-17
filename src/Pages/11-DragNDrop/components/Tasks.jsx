import { useDndContext } from "../GlobalApp";
import Task from "./Task";

function Tasks() {
    const { tasks } = useDndContext();

    return (
        <article>
            <ul className=" bg-gray-500 grid gap-4 p-4">
                {tasks.map((task) => (
                    <Task key={task.id} {...task} />
                ))}
            </ul>
        </article>
    );
}

export default Tasks;
