function Details({ stock, year }) {
    // console.log(stock);

    const financials = stock?.financials?.filter((obj) => obj.year === year)[0];
    const netSales = financials && financials["net_sales"];
    const ebidta = financials && financials["ebidta"];
    const netProfit = financials && financials["net_profit"];
    const equity = financials && financials["equity"];
    const totalAssets = financials && financials["total_assets"];

    const profitability = stock?.profitability?.filter(
        (obj) => obj.year === year,
    )[0];
    const grossMargin = profitability && profitability["gross_profit_margin"];
    const ebidtaMargin = profitability && profitability["ebidta_margin"];
    const netMargin = profitability && profitability["net_profit_margin"];
    const equityMargin = profitability && profitability["roe"];
    const assetsMargin = profitability && profitability["roa"];

    const valuation = stock?.valuation?.filter((obj) => obj.year === year)[0];
    const price = valuation && valuation["price"];
    const p_e = valuation && valuation["p/e"];
    const pd_ds = valuation && valuation["pd/ds"];
    const fd_sales = valuation && valuation["fd/sales"];
    const fd_ebidta = valuation && valuation["fd/ebidta"];
    const eps = valuation && valuation["eps"];

    return (
        <div className=" py-[4vh] grid gap-[4vh] md:flex md:flex-wrap">
            <div className=" bg-red-100 py-[2vh] px-[4vw] grow">
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">Net Satışlar :</span>
                    <span>{netSales}</span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">Favök :</span>
                    <span>{ebidta}</span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">Net Kar :</span>
                    <span>{netProfit}</span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">Özkaynaklar :</span>
                    <span>{equity}</span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">Aktifler :</span>
                    <span>{totalAssets}</span>
                </p>
            </div>

            <div className=" bg-blue-100 py-[2vh] px-[4vw] grow">
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">Brüt Kar Marjı :</span>
                    <span>
                        <span className=" text-xs">%</span> {grossMargin}
                    </span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">Faaliyet Kar Marjı :</span>
                    <span>
                        <span className=" text-xs">%</span> {ebidtaMargin}
                    </span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">Net Kar Marjı :</span>
                    <span>
                        <span className=" text-xs">%</span> {netMargin}
                    </span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">Özkaynak Karlılığı :</span>
                    <span>
                        <span className=" text-xs">%</span> {equityMargin}
                    </span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">Aktif Karlılığı :</span>
                    <span>
                        <span className=" text-xs">%</span> {assetsMargin}
                    </span>
                </p>
            </div>

            <div className=" bg-green-100 py-[2vh] px-[4vw] grow">
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">Fiyat :</span>
                    <span>{price}</span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">F/K :</span>
                    <span>{p_e}</span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">PD/DD :</span>
                    <span>{pd_ds}</span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">FD/Satışlar :</span>
                    <span>{fd_sales}</span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">FD/Favök :</span>
                    <span>{fd_ebidta}</span>
                </p>
                <p className=" grid grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end">Hisse Başı Kar :</span>
                    <span>{eps}</span>
                </p>
            </div>
        </div>
    );
}

export default Details;
