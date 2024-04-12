import categories from "../../data/categories";
import CategoryBtn from "./CategoryBtn";
import "./index.scss";

function index() {
    return (
        <div
            className="Categories border-t border-l border-gray-500
            col-start-1 col-span-full row-start-1 row-span-1
        "
        >
            {categories.map((categoryItem) => (
                <CategoryBtn key={categoryItem} categoryItem={categoryItem} />
            ))}
        </div>
    );
}

export default index;
