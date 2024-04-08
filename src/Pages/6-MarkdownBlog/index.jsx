import { useEffect } from "react";
import GlobalApp from "./GlobalApp";
import Header from "./components/Header";
import Main from "./components/Main";

import { goTopOfPage } from "../../functions/functions/goTopOfPage";

function index() {
    useEffect(() => {
        goTopOfPage();
    }, []);

    return (
        <GlobalApp className="MarkdownBlog">
            <Header />
            <Main />
        </GlobalApp>
    );
}

export default index;
