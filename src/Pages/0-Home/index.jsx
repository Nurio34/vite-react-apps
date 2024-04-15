import { data } from "./data";
import "./index.scss";
function index() {
    return (
        <div className="Table border-l border-t border-black ">
            {data.map((room) => {
                console.log(room);

                return (
                    <div
                        className={` border-r border-b border-black p-1 grid place-content-start justify-stretch 
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
                            className=" capitalize "
                            style={{ fontVariant: "small-caps" }}
                        >
                            {room[2] && room[2]}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default index;
