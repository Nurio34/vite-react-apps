import React, { useEffect, useRef } from "react";
import Category from "./Category";
import { useDragnDropContext } from "../../../GlobalApp";

const Categories = () => {
    const categories = [
        {
            label: "todo",
        },
        {
            label: "doing",
        },
        {
            label: "done",
        },
    ];

    const { task, setTask } = useDragnDropContext();

    const onChange = (e) => {
        setTask((task) => {
            return { ...task, category: e.target.value };
        });
    };

    const Select = useRef();
    useEffect(() => {
        setTask((task) => {
            return { ...task, category: Select.current.value };
        });
    }, []);

    return (
        <select
            ref={Select}
            className=" bg-orange-100 py-1 px-2 rounded-md"
            onChange={onChange}
            value={task.category}
        >
            {categories.map((category, index) => {
                return <Category key={index} category={category} />;
            })}
        </select>
    );
};

export default Categories;
