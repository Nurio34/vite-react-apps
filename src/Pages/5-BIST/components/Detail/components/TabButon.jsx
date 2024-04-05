function TabButon({ tab, year, setYear }) {
    return (
        <p
            className={`Tab grow px-[1vw] py-[1vh] text-center cursor-pointer
                ${tab === year && " bg-black text-orange-500 font-semibold"}
            `}
            onClick={(e) => {
                setYear(parseInt(e.target.textContent));
            }}
        >
            {tab}
        </p>
    );
}

export default TabButon;
