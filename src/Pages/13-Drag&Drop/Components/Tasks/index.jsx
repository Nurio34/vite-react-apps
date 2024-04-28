import { useDragnDropContext } from "../../GlobalApp";
import Category from "./components/Category";

const Tasks = () => {
    const { tasks } = useDragnDropContext();

    let categories = [];

    tasks.forEach((task) => {
        if (!categories.includes(task.category)) {
            categories.push(task.category);
        }
    });
    categories = categories.filter((category) => category !== "");

    return (
        <section className="grid grid-cols-3 gap-4 pt-4">
            {categories.map((category, index) => {
                return <Category key={index} category={category} />;
            })}
        </section>
    );
};

export default Tasks;
