import { useDragnDropContext } from "../../../GlobalApp";

const Subject = ({ subject }) => {
    const { task, setTask } = useDragnDropContext();

    const onChange = (e) => {
        const subjects = task.subjects;
        const id = e.target.id;

        if (!subjects.includes(id)) {
            setTask((task) => {
                return { ...task, subjects: [...task.subjects, id] };
            });
        } else {
            setTask((task) => {
                return {
                    ...task,
                    subjects: task.subjects.filter((task) => task !== id),
                };
            });
        }
    };

    return (
        <label
            htmlFor={subject.label}
            tabIndex={0}
            className={` p-1 text-xs rounded-md capitalize select-none 
                ${
                    task.subjects.includes(subject.label)
                        ? "bg-green-500 text-white"
                        : "bg-orange-300 text-black"
                }
            `}
            style={{ fontVariant: "small-caps" }}
        >
            {subject.label}
            <input
                type="checkbox"
                name="subject"
                id={subject.label}
                className=" hidden"
                onChange={onChange}
            />
        </label>
    );
};

export default Subject;
