import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Stocks from "./components/Stocks";
import GlobalApp from "./GlobalApp";
import Detail from "./components/Detail";

function index() {
    const location = useLocation();

    return (
        <GlobalApp>
            {!location.state && <Navigation />}
            <Routes>
                <Route path="/" element={<Stocks />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </GlobalApp>
    );
}

export default index;
