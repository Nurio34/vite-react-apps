import { useDragnDropContext } from "../../../GlobalApp";

const TaskInput = () => {
    const { task, setTask } = useDragnDropContext();

    const onChange = (e) => {
        setTask((task) => {
            return { ...task, task: e.target.value };
        });
    };

    return (
        <input
            type="text"
            name="task"
            id="task"
            placeholder="Enter yout task..."
            className=" col-span-full bg-orange-100 rounded-md py-1 px-2"
            onChange={onChange}
            value={task.task}
        />
    );
};

export default TaskInput;
