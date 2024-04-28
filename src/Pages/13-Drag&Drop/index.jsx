import { useSelector } from "react-redux";
import GlobalApp from "./GlobalApp";
import Form from "./Components/Form";
import { useState } from "react";
import Message from "./Components/Message";
import Tasks from "./Components/Tasks";

const index = () => {
    const { mainHeight } = useSelector((s) => s.components);

    return (
        <GlobalApp>
            <section
                style={{ minHeight: mainHeight }}
                className="p-4 grid content-start gap-4 max-w-[1000px] m-auto"
            >
                <Form />
                <Message />
                <Tasks />
            </section>
        </GlobalApp>
    );
};

export default index;
