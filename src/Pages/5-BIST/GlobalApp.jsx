import { createContext, useContext, useEffect, useState } from "react";
import { data } from "./data";
import { examine_increments } from "./examine";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function GlobalApp({ children }) {
    const [stocks, setStocks] = useState([]);

    const [financialKeys, setFinancialKeys] = useState([]);
    const [increments, setIncrements] = useState([]);

    const [netSales, setNetSales] = useState([]);
    const [ebidta, setEbidta] = useState([]);
    const [netProfit, setNetProfit] = useState([]);
    const [equity, setEquity] = useState([]);
    const [totalAssets, setTotalAssets] = useState([]);

    const [netSalesRanks, setNetSalesRanks] = useState([]);
    const [ebidtaRanks, setEbidtaRanks] = useState([]);
    const [netProfitRanks, setNetProfitRanks] = useState([]);
    const [equityRanks, setEquityRanks] = useState([]);
    const [totalAssetsRanks, setTotalAssetsRanks] = useState([]);
    // console.log(netSalesRanks);

    const [currentIndicator, setCurrentIndicator] = useState("alphabetic");
    const [years, setYears] = useState(1);
    const [sortBy, setSortBy] = useState([]);

    const [search, setSearch] = useState("");
    const [detailSearch, setDetailSearch] = useState("");

    useEffect(() => {
        setStocks(data);
    }, [data]);

    useEffect(() => {
        if (stocks.length > 0) {
            setFinancialKeys(
                Object.keys(stocks[0].financials[0])?.filter(
                    (item) => item !== "year",
                ),
            );
        }
    }, [stocks]);

    useEffect(() => {
        const Arr = [];
        financialKeys.forEach((key) => {
            Arr.push(examine_increments(stocks, key, years));
        });
        setIncrements(Arr);
    }, [financialKeys, years]);

    useEffect(() => {
        setNetSales(
            increments.filter((obj) =>
                obj.data.every((obj) => Object.keys(obj)[2] === "net_sales"),
            ),
        );

        setEbidta(
            increments.filter((obj) =>
                obj.data.every((obj) => Object.keys(obj)[2] === "ebidta"),
            ),
        );
        setNetProfit(
            increments.filter((obj) =>
                obj.data.every((obj) => Object.keys(obj)[2] === "net_profit"),
            ),
        );
        setEquity(
            increments.filter((obj) =>
                obj.data.every((obj) => Object.keys(obj)[2] === "equity"),
            ),
        );
        setTotalAssets(
            increments.filter((obj) =>
                obj.data.every((obj) => Object.keys(obj)[2] === "total_assets"),
            ),
        );
    }, [increments]);

    useEffect(() => {
        if (
            netSales.length > 0 ||
            ebidta.length > 0 ||
            netProfit.length > 0 ||
            equity.length > 0 ||
            totalAssets.length > 0
        ) {
            const sortedNetSalesRanks = netSales[0].data
                .slice()
                .sort((obj1, obj2) => {
                    const netSales1 = parseFloat(obj1.net_sales);
                    const netSales2 = parseFloat(obj2.net_sales);

                    // Handle NaN values
                    if (isNaN(netSales1)) {
                        return 1; // Treat NaN as the highest value
                    } else if (isNaN(netSales2)) {
                        return -1; // Treat NaN as the lowest value
                    } else {
                        return netSales2 - netSales1; // Regular numeric comparison
                    }
                });

            setNetSalesRanks(
                sortedNetSalesRanks.map((obj, ind) => {
                    return { id: obj.id, name: obj.name, rank: ind + 1 };
                }),
            );

            setNetSalesRanks((pre) => {
                return pre.map((object) => {
                    return {
                        ...object,
                        increase: Object.values(
                            Object.values(netSales[0])[0].filter(
                                (obj) => obj.id === object.id,
                            )[0],
                        )[2],
                    };
                });
            });

            const sortedEbidtaRanks = ebidta[0].data
                .slice()
                .sort((obj1, obj2) => {
                    const ebidta1 = parseFloat(obj1.ebidta);
                    const ebidta2 = parseFloat(obj2.ebidta);

                    // Handle NaN values
                    if (isNaN(ebidta1)) {
                        return 1; // Treat NaN as the highest value
                    } else if (isNaN(ebidta2)) {
                        return -1; // Treat NaN as the lowest value
                    } else {
                        return ebidta2 - ebidta1; // Regular numeric comparison
                    }
                });

            setEbidtaRanks(
                sortedEbidtaRanks.map((obj, ind) => {
                    return { id: obj.id, name: obj.name, rank: ind + 1 };
                }),
            );

            setEbidtaRanks((pre) => {
                return pre.map((object) => {
                    return {
                        ...object,
                        increase: Object.values(
                            Object.values(ebidta[0])[0].filter(
                                (obj) => obj.id === object.id,
                            )[0],
                        )[2],
                    };
                });
            });

            const sortedNetProfitRanks = netProfit[0].data
                .slice()
                .sort((obj1, obj2) => {
                    const netProfit1 = parseFloat(obj1.net_profit);
                    const netProfit2 = parseFloat(obj2.net_profit);

                    // Handle NaN values
                    if (isNaN(netProfit1)) {
                        return 1; // Treat NaN as the highest value
                    } else if (isNaN(netProfit2)) {
                        return -1; // Treat NaN as the lowest value
                    } else {
                        return netProfit2 - netProfit1; // Regular numeric comparison
                    }
                });

            setNetProfitRanks(
                sortedNetProfitRanks.map((obj, ind) => {
                    return { id: obj.id, name: obj.name, rank: ind + 1 };
                }),
            );

            setNetProfitRanks((pre) => {
                return pre.map((object) => {
                    return {
                        ...object,
                        increase: Object.values(
                            Object.values(netProfit[0])[0].filter(
                                (obj) => obj.id === object.id,
                            )[0],
                        )[2],
                    };
                });
            });

            const sortedEquityRanks = equity[0].data
                .slice()
                .sort((obj1, obj2) => {
                    const equity1 = parseFloat(obj1.equity);
                    const equity2 = parseFloat(obj2.equity);

                    // Handle NaN values
                    if (isNaN(equity1)) {
                        return 1; // Treat NaN as the highest value
                    } else if (isNaN(equity2)) {
                        return -1; // Treat NaN as the lowest value
                    } else {
                        return equity2 - equity1; // Regular numeric comparison
                    }
                });

            setEquityRanks(
                sortedEquityRanks.map((obj, ind) => {
                    return { id: obj.id, name: obj.name, rank: ind + 1 };
                }),
            );

            setEquityRanks((pre) => {
                return pre.map((object) => {
                    return {
                        ...object,
                        increase: Object.values(
                            Object.values(equity[0])[0].filter(
                                (obj) => obj.id === object.id,
                            )[0],
                        )[2],
                    };
                });
            });

            const sortedTotalAssetsRanks = totalAssets[0].data
                .slice()
                .sort((obj1, obj2) => {
                    const totalAssets1 = parseFloat(obj1.total_assets);
                    const totalAssets2 = parseFloat(obj2.total_assets);

                    // Handle NaN values
                    if (isNaN(totalAssets1)) {
                        return 1; // Treat NaN as the highest value
                    } else if (isNaN(totalAssets2)) {
                        return -1; // Treat NaN as the lowest value
                    } else {
                        return totalAssets2 - totalAssets1; // Regular numeric comparison
                    }
                });

            setTotalAssetsRanks(
                sortedTotalAssetsRanks.map((obj, ind) => {
                    return { id: obj.id, name: obj.name, rank: ind + 1 };
                }),
            );

            setTotalAssetsRanks((pre) => {
                return pre.map((object) => {
                    return {
                        ...object,
                        increase: Object.values(
                            Object.values(totalAssets[0])[0].filter(
                                (obj) => obj.id === object.id,
                            )[0],
                        )[2],
                    };
                });
            });
        }
    }, [netSales, ebidta, netProfit, equity, totalAssets, years]);

    useEffect(() => {
        if (currentIndicator === "alphabetic") {
            setSortBy(stocks);
        } else if (currentIndicator === "net_sales") {
            setSortBy(netSalesRanks);
        } else if (currentIndicator === "ebidta") {
            setSortBy(ebidtaRanks);
        } else if (currentIndicator === "net_profit") {
            setSortBy(netProfitRanks);
        } else if (currentIndicator === "equity") {
            setSortBy(equityRanks);
        } else if (currentIndicator === "total_assets") {
            setSortBy(totalAssetsRanks);
        }
    }, [
        currentIndicator,
        stocks,
        netSalesRanks,
        ebidtaRanks,
        netProfitRanks,
        equityRanks,
        totalAssetsRanks,
    ]);

    return (
        <GlobalContext.Provider
            value={{
                stocks,
                financialKeys,
                years,
                setYears,
                currentIndicator,
                setCurrentIndicator,
                sortBy,
                netSalesRanks,
                ebidtaRanks,
                netProfitRanks,
                equityRanks,
                totalAssetsRanks,
                search,
                setSearch,
                detailSearch,
                setDetailSearch,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalApp;
