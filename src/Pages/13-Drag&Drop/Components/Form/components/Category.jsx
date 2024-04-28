const Category = ({ category }) => {
    return <option value={category.label}>{category.label}</option>;
};

export default Category;
