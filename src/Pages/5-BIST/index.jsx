import Navigation from "./components/Navigation";
import Stocks from "./components/Stocks";
import GlobalApp from "./GlobalApp";

function index() {
    return (
        <GlobalApp>
            <Navigation />
            <Stocks />
        </GlobalApp>
    );
}

export default index;
