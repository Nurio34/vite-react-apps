import { useEffect, useState } from "react";
import { useGlobalContext } from "../../GlobalApp";
import { examine_increments } from "../../examine";
import Stock from "./components/Stock";

function Stocks() {
    const { stocks } = useGlobalContext();
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

    console.log(totalAssetsRanks);

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
        financialKeys.forEach((key) => {
            setIncrements((pre) => [
                ...pre,
                examine_increments(stocks, key, 3),
            ]);
        });
    }, [financialKeys]);

    useEffect(() => {
        setNetSales(
            increments.filter((obj) =>
                obj.data.every((obj) => Object.keys(obj)[1] === "net_sales"),
            ),
        );
        setEbidta(
            increments.filter((obj) =>
                obj.data.every((obj) => Object.keys(obj)[1] === "ebidta"),
            ),
        );
        setNetProfit(
            increments.filter((obj) =>
                obj.data.every((obj) => Object.keys(obj)[1] === "net_profit"),
            ),
        );
        setEquity(
            increments.filter((obj) =>
                obj.data.every((obj) => Object.keys(obj)[1] === "equity"),
            ),
        );
        setTotalAssets(
            increments.filter((obj) =>
                obj.data.every((obj) => Object.keys(obj)[1] === "total_assets"),
            ),
        );
    }, [increments]);

    useEffect(() => {
        if (netSales.length > 0 || ebidta.length > 0 || netProfit.length > 0) {
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
                    return { id: obj.id, rank: ind + 1 };
                }),
            );

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
                    return { id: obj.id, rank: ind + 1 };
                }),
            );

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
                    return { id: obj.id, rank: ind + 1 };
                }),
            );

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
                    return { id: obj.id, rank: ind + 1 };
                }),
            );

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
                    return { id: obj.id, rank: ind + 1 };
                }),
            );
        }
    }, [netSales, ebidta, netProfit]);

    return (
        <section className="Stocks">
            {stocks.map((stock) => {
                if (stock.id) {
                    return <Stock key={stock.id} stock={stock} />;
                }
            })}
        </section>
    );
}

export default Stocks;
