function TabButon({ tab, setYear }) {
    return (
        <p
            className="Tab grow px-[1vw] py-[1vh] text-center cursor-pointer"
            onClick={(e) => setYear(parseInt(e.target.textContent))}
        >
            {tab}
        </p>
    );
}

export default TabButon;
