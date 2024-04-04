import { useGlobalContext } from "../../../GlobalApp";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function Stock({ stock }) {
    const { id, name } = stock;

    const { netSales, netSalesRanks } = useGlobalContext();
    console.log(
        netSales[0]?.data?.filter((obj) => obj.id === id)[0]["net_sales"],
    );
    return (
        <article>
            <h2 className="Header" style={{ fontVariant: "small-caps" }}>
                {id} ({name})
            </h2>
            <div>
                <p className=" flex items-center">
                    <span className=" text-end">Net Satışlar :</span>
                    <span className=" text-xs pl-4">%</span>
                    <span>
                        {
                            netSales[0]?.data?.filter(
                                (obj) => obj.id === id,
                            )[0]["net_sales"]
                        }
                    </span>
                    <span>
                        {netSales[0]?.data?.filter((obj) => obj.id === id)[0][
                            "net_sales"
                        ] > 0 ? (
                            <FaArrowUp color="green" size={24} />
                        ) : (
                            <FaArrowDown color="red" size={24} />
                        )}
                    </span>
                </p>
                <p>Favök : </p>
                <p>Net Kar : </p>
                <p>Özkaynaklar : </p>
                <p>Aktifler : </p>
            </div>
        </article>
    );
}

export default Stock;
