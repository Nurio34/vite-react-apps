import { useState } from "react";
import { useGlobalContext } from "../../..";
import Tab from "./Tab";
import TabContent from "./TabContent";

function Trending() {
    const { trendings } = useGlobalContext();
    const [trends, setTrends] = useState([]);
    const [currentTab, setCurrentTab] = useState("");

    return (
        <div className=" padding">
            <div className=" flex gap-[4vw]">
                {Object.entries(trendings)?.map(([name, arr]) => {
                    return (
                        <Tab
                            key={name}
                            name={name}
                            arr={arr}
                            setTrends={setTrends}
                            currentTab={currentTab}
                            setCurrentTab={setCurrentTab}
                        />
                    );
                })}
            </div>
            <div className=" grid gap-[1vh] padding">
                {trends?.map((obj, ind) => {
                    return (
                        <TabContent
                            key={ind}
                            obj={obj}
                            ind={ind}
                            currentTab={currentTab}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Trending;
