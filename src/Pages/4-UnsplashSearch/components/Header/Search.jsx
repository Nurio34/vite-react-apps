import { useGlobalContext } from "../..";
import { useAxios } from "../../../../Hooks/useAxios";

const url = (search) =>
    `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${
        import.meta.env.VITE_UNSPLASH_SEARCH_KEY
    }`;
const options = {};

function Search() {
    const { setSearchQuery } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        formData = Object.fromEntries(formData);
        const { search } = formData;
        setSearchQuery(search);
        e.currentTarget.reset();
    };

    return (
        <form className="" onSubmit={handleSubmit}>
            <div className="flex max-w-[700px] m-auto">
                <input
                    type="search"
                    name="search"
                    id="searchInp"
                    className=" py-1 px-[1vw] border border-white rounded-tl-md rounded-bl-md grow"
                />
                <button
                    type="submit"
                    className=" p-1 text-white border border-white rounded-tr-md rounded-br-md"
                >
                    Search
                </button>
            </div>
        </form>
    );
}

export default Search;
