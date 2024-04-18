import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Task({ id, task }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <li
            className=" flex gap-2 items-center bg-white p-2 touch-none "
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
        >
            <input type="checkbox" name="" id="" />
            <p>{task}</p>
        </li>
    );
}

export default Task;
