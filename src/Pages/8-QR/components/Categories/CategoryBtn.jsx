import { useQR } from "../../GlobalApp";
import "./index.scss";

function CategoryBtn({ categoryItem }) {
    const { category, setCategory } = useQR();

    return (
        <button
            className={`CategoryBtn md:padding2 md:font1 border-b border-r border-gray-500 cursor-pointer
             ${
                 category === categoryItem
                     ? " bg-orange-500 text-white"
                     : "bg-transparent"
             }
            `}
            style={{ fontVariant: "small-caps" }}
            onClick={(e) => setCategory(categoryItem)}
        >
            {categoryItem}
        </button>
    );
}

export default CategoryBtn;
