function Task({ id, task }) {
    return (
        <li className=" flex gap-2 items-center bg-white p-2">
            <input type="checkbox" name="" id="" />
            <p>{task}</p>
        </li>
    );
}

export default Task;
