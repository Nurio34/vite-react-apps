import { goodLookingNumber } from "../../../../../functions/goodLookingNumber";

function Details({ stock, year }) {
    // console.log(stock);

    const financials = stock?.financials?.filter((obj) => obj.year === year)[0];
    const netSales =
        financials && convertMilionToGoodLookingNumber(financials["net_sales"]);
    const ebidta =
        financials && convertMilionToGoodLookingNumber(financials["ebidta"]);
    const netProfit =
        financials &&
        convertMilionToGoodLookingNumber(financials["net_profit"]);
    const equity =
        financials && convertMilionToGoodLookingNumber(financials["equity"]);
    const totalAssets =
        financials &&
        convertMilionToGoodLookingNumber(financials["total_assets"]);
    function convertMilionToGoodLookingNumber(num) {
        if (num) {
            const parts = num && num.toString().split(".");
            const part1 = goodLookingNumber(parts[0]);
            let part2;

            if (parts.length > 1) {
                part2 =
                    parts[1]?.length === 1
                        ? parts[1] + "00.000"
                        : parts[1] + "0.000";
            } else {
                part2 = "000.000";
            }

            num = part1 + `${part1 != 0 ? "." : ""}` + part2;
            return <span>&#8378; {num} </span>;
        }
    }
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
                <p className=" grid grid-cols-[0.63fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        Net Satışlar :
                    </span>
                    {netSales}
                </p>
                <p className=" grid grid-cols-[0.63fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        Favök :
                    </span>
                    {ebidta}
                </p>
                <p className=" grid grid-cols-[0.63fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        Net Kar :
                    </span>
                    {netProfit}
                </p>
                <p className=" grid grid-cols-[0.63fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        Özkaynaklar :
                    </span>
                    {equity}
                </p>
                <p className=" grid grid-cols-[0.63fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        Aktifler :
                    </span>
                    {totalAssets}
                </p>
            </div>

            <div className=" bg-blue-100 py-[2vh] px-[4vw] grow">
                <p className=" grid grid-cols-[1.2fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        Brüt Kar Marjı :
                    </span>
                    <span>
                        {grossMargin && <span className=" text-xs">%</span>}{" "}
                        {grossMargin}
                    </span>
                </p>
                <p className=" grid grid-cols-[1.2fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        Faaliyet Kar Marjı :
                    </span>
                    <span>
                        {ebidtaMargin && <span className=" text-xs">%</span>}{" "}
                        {ebidtaMargin}
                    </span>
                </p>
                <p className=" grid grid-cols-[1.2fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        Net Kar Marjı :
                    </span>
                    <span>
                        {netMargin && <span className=" text-xs">%</span>}{" "}
                        {netMargin}
                    </span>
                </p>
                <p className=" grid grid-cols-[1.2fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        Özkaynak Karlılığı :
                    </span>
                    <span>
                        {equityMargin && <span className=" text-xs">%</span>}{" "}
                        {equityMargin}
                    </span>
                </p>
                <p className=" grid grid-cols-[1.2fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        Aktif Karlılığı :
                    </span>
                    <span>
                        {assetsMargin && <span className=" text-xs">%</span>}{" "}
                        {assetsMargin}
                    </span>
                </p>
            </div>

            <div className=" bg-green-100 py-[2vh] px-[4vw] grow">
                <p className=" grid grid-cols-[1.2fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        Fiyat :
                    </span>
                    <span>{price}</span>
                </p>
                <p className=" grid grid-cols-[1.2fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">F/K :</span>
                    <span>{p_e}</span>
                </p>
                <p className=" grid grid-cols-[1.2fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        PD/DD :
                    </span>
                    <span>{pd_ds}</span>
                </p>
                <p className=" grid grid-cols-[1.2fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        FD/Satışlar :
                    </span>
                    <span>{fd_sales}</span>
                </p>
                <p className=" grid grid-cols-[1.2fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        FD/Favök :
                    </span>
                    <span>{fd_ebidta}</span>
                </p>
                <p className=" grid grid-cols-[1.2fr,1fr] md:grid-cols-[1.4fr,1fr] gap-[4vw]">
                    <span className="text-end text-sm md:text-base">
                        Hisse Başı Kar :
                    </span>
                    <span>{eps}</span>
                </p>
            </div>
        </div>
    );
}

export default Details;
