import { useGlobalContext } from "../../../GlobalApp";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Rank1_img from "../../../../../assets/Rank1.webp";
import Rank2_img from "../../../../../assets/Rank2.webp";
import Rank3_img from "../../../../../assets/Rank3.webp";

function Stock({ stock }) {
    const { id, name, rank } = stock;

    const {
        netSalesRanks,
        ebidtaRanks,
        netProfitRanks,
        equityRanks,
        totalAssetsRanks,
        currentIndicator,
    } = useGlobalContext();

    const navigate = useNavigate();

    return (
        <article
            className="bg-gray-100 w-screen px-[4vw] py-[2vh]  max-w-[768px] grid"
            id={id}
        >
            <h2
                className=" header flex items-end"
                style={{ fontVariant: "small-caps" }}
            >
                <div className=" relative">
                    <span>{id}</span>
                    {rank === 1 ? (
                        <img
                            src={Rank1_img}
                            alt="Rank1"
                            width={50}
                            className=" absolute top-0  -translate-y-1/2 right-0 translate-x-full "
                        />
                    ) : rank === 2 ? (
                        <img
                            src={Rank2_img}
                            alt="Rank2"
                            width={50}
                            className=" absolute top-0  -translate-y-1/2 right-0 translate-x-full "
                        />
                    ) : (
                        rank === 3 && (
                            <img
                                src={Rank3_img}
                                alt="Rank4"
                                width={50}
                                className=" absolute top-0  -translate-y-1/2 right-0 translate-x-full "
                            />
                        )
                    )}
                </div>
                <span className=" text-xs pl-[2vw]">{name}</span>
            </h2>
            <div className=" grid gap-[1vh]">
                <p
                    className={` flex items-center ${
                        currentIndicator === "net_sales" &&
                        " bg-green-100 font-semibold text-lg m-[2vh]"
                    }`}
                >
                    <span className=" text-end">Net Satışlar :</span>
                    <span className=" text-xs pl-4 pr-1 pr-1">%</span>
                    <span>
                        {netSalesRanks.length > 0 &&
                            netSalesRanks.filter((obj) => obj.id === id)[0][
                                "increase"
                            ]}
                    </span>
                    <span className=" px-[2vw]">
                        {netSalesRanks.length > 0 &&
                        netSalesRanks.filter((obj) => obj.id === id)[0][
                            "increase"
                        ] > 0 ? (
                            <FaArrowUp color="green" size={24} />
                        ) : (
                            <FaArrowDown color="red" size={24} />
                        )}
                    </span>
                    <span>
                        {netSalesRanks.length > 0 &&
                            netSalesRanks.filter((obj) => obj.id === id)[0][
                                "rank"
                            ]}
                    </span>
                </p>
                <p
                    className={` flex items-center ${
                        currentIndicator === "ebidta" &&
                        " bg-green-100 font-semibold text-lg m-[2vh]"
                    }`}
                >
                    <span className=" text-end">Favök :</span>
                    <span className=" text-xs pl-4 pr-1">%</span>
                    <span>
                        {ebidtaRanks.length > 0 &&
                            ebidtaRanks.filter((obj) => obj.id === id)[0][
                                "increase"
                            ]}
                    </span>
                    <span className=" px-[2vw]">
                        {ebidtaRanks.length > 0 &&
                        ebidtaRanks.filter((obj) => obj.id === id)[0][
                            "increase"
                        ] > 0 ? (
                            <FaArrowUp color="green" size={24} />
                        ) : (
                            <FaArrowDown color="red" size={24} />
                        )}
                    </span>
                    <span>
                        {ebidtaRanks.length > 0 &&
                            ebidtaRanks.filter((obj) => obj.id === id)[0][
                                "rank"
                            ]}
                    </span>
                </p>
                <p
                    className={` flex items-center ${
                        currentIndicator === "net_profit" &&
                        " bg-green-100 font-semibold text-lg m-[2vh]"
                    }`}
                >
                    <span className=" text-end">Net Kar :</span>
                    <span className=" text-xs pl-4 pr-1">%</span>
                    <span>
                        {netProfitRanks.length > 0 &&
                            netProfitRanks.filter((obj) => obj.id === id)[0][
                                "increase"
                            ]}
                    </span>
                    <span className=" px-[2vw]">
                        {netProfitRanks.length > 0 &&
                        netProfitRanks.filter((obj) => obj.id === id)[0][
                            "increase"
                        ] > 0 ? (
                            <FaArrowUp color="green" size={24} />
                        ) : (
                            <FaArrowDown color="red" size={24} />
                        )}
                    </span>
                    <span>
                        {netProfitRanks.length > 0 &&
                            netProfitRanks.filter((obj) => obj.id === id)[0][
                                "rank"
                            ]}
                    </span>
                </p>
                <p
                    className={` flex items-center ${
                        currentIndicator === "equity" &&
                        " bg-green-100 font-semibold text-lg m-[2vh]"
                    }`}
                >
                    <span className=" text-end">Özkaynaklar :</span>
                    <span className=" text-xs pl-4 pr-1">%</span>
                    <span>
                        {equityRanks.length > 0 &&
                            equityRanks.filter((obj) => obj.id === id)[0][
                                "increase"
                            ]}
                    </span>
                    <span className=" px-[2vw]">
                        {equityRanks.length > 0 &&
                        equityRanks.filter((obj) => obj.id === id)[0][
                            "increase"
                        ] > 0 ? (
                            <FaArrowUp color="green" size={24} />
                        ) : (
                            <FaArrowDown color="red" size={24} />
                        )}
                    </span>
                    <span>
                        {equityRanks.length > 0 &&
                            equityRanks.filter((obj) => obj.id === id)[0][
                                "rank"
                            ]}
                    </span>
                </p>
                <p
                    className={` flex items-center ${
                        currentIndicator === "total_assets" &&
                        " bg-green-100 font-semibold text-lg m-[2vh]"
                    }`}
                >
                    <span className=" text-end">Aktifler :</span>
                    <span className=" text-xs pl-4 pr-1">%</span>
                    <span>
                        {totalAssetsRanks.length > 0 &&
                            totalAssetsRanks.filter((obj) => obj.id === id)[0][
                                "increase"
                            ]}
                    </span>
                    <span className=" px-[2vw]">
                        {totalAssetsRanks.length > 0 &&
                        totalAssetsRanks.filter((obj) => obj.id === id)[0][
                            "increase"
                        ] > 0 ? (
                            <FaArrowUp color="green" size={24} />
                        ) : (
                            <FaArrowDown color="red" size={24} />
                        )}
                    </span>
                    <span>
                        {totalAssetsRanks.length > 0 &&
                            totalAssetsRanks.filter((obj) => obj.id === id)[0][
                                "rank"
                            ]}
                    </span>
                </p>
            </div>
            <button
                className=" bg-blue-500 text-white justify-self-end px-[4vh] py-[1vh] rounded-md capitalize"
                style={{ fontVariant: "small-caps" }}
                onClick={(e) => {
                    navigate(`/vite-react-projects/bist/detail`, {
                        state: id,
                    });
                }}
            >
                Detaylı İncele
            </button>
        </article>
    );
}

export default Stock;
