import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Stocks from "./components/Stocks";
import GlobalApp from "./GlobalApp";
import Detail from "./components/Detail";

function index() {
    return (
        <GlobalApp>
            <Navigation />
            <Routes>
                <Route path="/" element={<Stocks />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </GlobalApp>
    );
}

export default index;
