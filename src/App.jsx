import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                    <Routes>
                        <Route
                            path="/vite-react-projects/*"
                            element={<Main />}
                        />
                    </Routes>
                    <Footer />
                </Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
