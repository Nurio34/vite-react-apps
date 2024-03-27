function Tab({ name, arr, setTrends, currentTab, setCurrentTab }) {
    return (
        <button
            className={`font-semibold capitalize ${
                currentTab === name &&
                "text-purple-600 underline underline-offset-2"
            }`}
            onClick={(e) => {
                setTrends(arr);
                setCurrentTab(name);
            }}
        >
            {name}
        </button>
    );
}

export default Tab;
