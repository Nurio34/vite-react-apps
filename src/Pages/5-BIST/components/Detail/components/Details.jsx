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

    console.log(profitability);
    return (
        <div className=" py-[4vh]">
            <div>
                <p className=" grid grid-cols-[0.6fr,1fr] gap-[4vw]">
                    <span className="text-end">Net Satışlar :</span>
                    <span>{netSales}</span>
                </p>
                <p className=" grid grid-cols-[0.6fr,1fr] gap-[4vw]">
                    <span className="text-end">Favök :</span>
                    <span>{ebidta}</span>
                </p>
                <p className=" grid grid-cols-[0.6fr,1fr] gap-[4vw]">
                    <span className="text-end">Net Kar :</span>
                    <span>{netProfit}</span>
                </p>
                <p className=" grid grid-cols-[0.6fr,1fr] gap-[4vw]">
                    <span className="text-end">Özkaynaklar :</span>
                    <span>{equity}</span>
                </p>
                <p className=" grid grid-cols-[0.6fr,1fr] gap-[4vw]">
                    <span className="text-end">Aktifler :</span>
                    <span>{totalAssets}</span>
                </p>
            </div>

            <div>
                <p className=" grid grid-cols-[0.6fr,1fr] gap-[4vw]">
                    <span className="text-end">Brüt Kar Marjı :</span>
                    <span>{grossMargin}</span>
                </p>
                <p className=" grid grid-cols-[0.6fr,1fr] gap-[4vw]">
                    <span className="text-end">Faaliyet Kar Marjı :</span>
                    <span>{ebidtaMargin}</span>
                </p>
                <p className=" grid grid-cols-[0.6fr,1fr] gap-[4vw]">
                    <span className="text-end">Net Kar Marjı :</span>
                    <span>{netMargin}</span>
                </p>
                <p className=" grid grid-cols-[0.6fr,1fr] gap-[4vw]">
                    <span className="text-end">Özkaynak Karlılığı :</span>
                    <span>{equityMargin}</span>
                </p>
                <p className=" grid grid-cols-[0.6fr,1fr] gap-[4vw]">
                    <span className="text-end">Aktif Karlılığı :</span>
                    <span>{assetsMargin}</span>
                </p>
            </div>
        </div>
    );
}

export default Details;
