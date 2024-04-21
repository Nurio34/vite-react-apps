import { data } from "./data";
import "./index.scss";
import { goodLookingNumber } from "../../functions/functions/goodLookingNumber";

function index() {
    const total = data.reduce((sum, room) => {
        return sum + +room[5][1];
    }, 0);

    return (
        <>
            <div className="Table  p-8 ">
                {data.map((room) => {
                    console.log(room);

                    return (
                        <div
                            className={` border border-black p-1 grid place-content-start justify-stretch
                        ${String(room[0]).slice(0, 1) == 2 && " row-start-2"}
                    ${String(room[0]).slice(0, 1) == 3 && " row-start-3"}
                    ${String(room[0]) === "309" && " border-t"}
                    `}
                        >
                            <p className=" justify-self-end border border-black p-1">
                                {room[0]}
                            </p>
                            <p
                                className={`capitalize`}
                                style={{ fontVariant: "small-caps" }}
                            >
                                {room[1] && room[1]}
                            </p>
                            <p
                                className=" capitalize border-b border-black pb-1"
                                style={{ fontVariant: "small-caps" }}
                            >
                                {room[2] && room[2]}
                            </p>
                            <p className=" pt-1">Giriş : {room[3][1]}</p>
                            <p>Çıkış : {room[4][1]}</p>
                            <p>Toplam : {goodLookingNumber(room[5][1])} TL </p>
                        </div>
                    );
                })}
            </div>
            <div className="px-16 mb-8">
                <h1 className=" font-bold text-2xl capitalize">Notlar</h1>
                <div className=" grid px-4">
                    {data.map((room) => {
                        return (
                            <p>{room[6] ? `${room[0]} : ${room[6][1]}` : ""}</p>
                        );
                    })}
                </div>
            </div>
            <div className="px-16">
                <h1 className=" font-bold text-2xl capitalize">Total</h1>
                <p className=" px-4">{goodLookingNumber(total)} TL</p>
            </div>
        </>
    );
}

export default index;
