import React from "react";
import { useGlobalContext } from "..";

function TabButton({ tab, currentTab, setCurrenTab }) {
    const { setInstaFilter } = useGlobalContext();

    return (
        <button
            onClick={(e) => {
                setCurrenTab(tab.label);

                if (currentTab === "Instagram Filter") {
                    setInstaFilter("");
                }
            }}
            className={`${
                currentTab === tab.label &&
                "text-purple-500 underline underline-offset-2"
            } `}
        >
            {tab.label}
        </button>
    );
}

export default TabButton;
