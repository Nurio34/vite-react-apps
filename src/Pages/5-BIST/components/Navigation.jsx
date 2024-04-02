import { useGlobalContext } from "../GlobalApp";

function Navigation() {
    const {
        financialKeys,
        stocks,
        years,
        setYears,
        currentIndicator,
        setCurrentIndicator,
    } = useGlobalContext();

    return (
        <nav className="Navigation padding border-b border-gray-300 shadow-lg">
            <select
                name="indicator"
                id="indicatorSelect"
                onChange={(e) => setCurrentIndicator(e.target.value)}
                value={currentIndicator}
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
        </nav>
    );
}

export default Navigation;
