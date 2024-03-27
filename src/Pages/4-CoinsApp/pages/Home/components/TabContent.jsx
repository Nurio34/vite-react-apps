import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../..";

function TabContent({ obj, ind, currentTab }) {
    const navigate = useNavigate();

    const { setId } = useGlobalContext();

    console.log(obj);
    return (
        <div
            className=" flex  items-center gap-[1vw]"
            onClick={(e) => {
                setId(obj.item.id);
                navigate(`/react_projects/coins_app/${obj.item.id}`, {
                    state: { obj },
                });
            }}
        >
            <span>{ind + 1}. </span>
            {currentTab !== "categories" && (
                <img
                    src={obj.item?.thumb || obj.thumb}
                    alt=""
                    className=" w-[24px] aspect-square object-cover"
                />
            )}
            <p className=" lowercase" style={{ fontVariant: "small-caps" }}>
                {currentTab === "coins"
                    ? obj.item.name
                    : currentTab === "nfts"
                    ? obj.id
                    : obj.name}
            </p>
        </div>
    );
}

export default TabContent;
