import { useSelector } from "react-redux";
import "./index.css";
import Form from "./components/Form";
import Result from "./components/Result";
import { useEffect, useMemo, useState } from "react";
import { useFetch } from "./useFetch";

function index() {
    const { mainHeight = "100%" } = useSelector((s) => s.components);
    const [amount, setAmount] = useState();
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [result, setResult] = useState({});

    const key = "fca_live_ft24uMqW8GMCWkUOM90RLq2YmVQW2dbZjMRVPpFE";
    const urlConverter = `https://api.freecurrencyapi.com/v1/latest`;
    const options = useMemo(
        () => ({
            params: {
                apikey: key,
                base_currency: from,
                currencies: to,
            },
        }),
        [from, to],
    );

    const { data, loading, error } = useFetch(urlConverter, options);

    useEffect(() => {
        setResult(data?.data);
    }, [data]);

    useEffect(() => {
        if (amount < 1) {
            setAmount(1);
        }
    }, [amount]);

    return (
        <section
            className="  currency-converter py-[4vw] grid place-content-center gap-[2vh] "
            style={{ minHeight: mainHeight }}
        >
            <Form
                from={from}
                setFrom={setFrom}
                to={to}
                setTo={setTo}
                amount={amount}
                setAmount={setAmount}
            />
            <Result result={result} amount={amount} from={from} to={to} />
        </section>
    );
}

export default index;
