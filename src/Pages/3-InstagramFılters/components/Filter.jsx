import React, { useState } from "react";
import InstagramFilter from "./InstagramFilter";
import CustomFilter from "./CustomFilter";
import TabButton from "./TabButton";

function Filter() {
    const tabs = [
        {
            id: 1,
            label: "Instagram Filter",
        },
        {
            id: 2,
            label: "Custom Filter",
        },
    ];

    const [currentTab, setCurrenTab] = useState("Instagram Filter");

    return (
        <article className="Filter">
            <div className="flex gap-[4vw]">
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.id}
                        tab={tab}
                        currentTab={currentTab}
                        setCurrenTab={setCurrenTab}
                    />
                ))}
            </div>
            <div className=" py-[2vh] px-[4vw]">
                {currentTab === "Instagram Filter" ? (
                    <InstagramFilter />
                ) : (
                    <CustomFilter />
                )}
            </div>
        </article>
    );
}

export default Filter;
