import React from "react";
import GlobalApp from "./GlobalApp";
import Header from "./components/Header";
import Main from "./components/Main";

function index() {
    return (
        <GlobalApp>
            <Header />
            <Main />
        </GlobalApp>
    );
}

export default index;
