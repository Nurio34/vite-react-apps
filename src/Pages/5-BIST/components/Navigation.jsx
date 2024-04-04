import { useGlobalContext } from "../GlobalApp";
import Search from "./Search";

function Navigation() {
    const {
        financialKeys,
        stocks,
        years,
        setYears,
        currentIndicator,
        setCurrentIndicator,
        setSearch,
    } = useGlobalContext();

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        formData = Object.fromEntries(formData);
        const { search } = formData;
        setSearch(search);
        e.currentTarget.reset();
    };

    return (
        <nav className="Navigation py-[2vh] px-[8vw] border-b border-gray-300 shadow-lg flex  items-center justify-between gap-[4vh]">
            <div className="grid gap-[4vw] sm:flex">
                <select
                    name="indicator"
                    id="indicatorSelect"
                    onChange={(e) => setCurrentIndicator(e.target.value)}
                    value={currentIndicator}
                    className=" bg-gray-100"
                >
                    <option value="alphabetic">Alfabetik</option>
                    {financialKeys.map((key) => {
                        return (
                            <option key={key} value={key}>
                                {key === "net_sales"
                                    ? "Net Satışlar"
                                    : key === "ebidta"
                                    ? "Favök"
                                    : key === "net_profit"
                                    ? "Net Kar"
                                    : key === "equity"
                                    ? "Özkaynaklar"
                                    : "Toplam Aktifler"}
                            </option>
                        );
                    })}
                </select>

                <select
                    name="years"
                    id="yearsSelect"
                    onChange={(e) => setYears(e.target.value)}
                    value={years}
                    className=" bg-gray-100"
                >
                    <option value="" disabled>
                        Years
                    </option>
                    {[...Array(stocks[0]?.financials?.length)].map((_, ind) => {
                        if (ind !== 0) {
                            return (
                                <option key={ind} value={ind}>
                                    {ind}
                                </option>
                            );
                        }
                    })}
                </select>
            </div>

            <Search onSubmit={onSubmit} />
        </nav>
    );
}

export default Navigation;
