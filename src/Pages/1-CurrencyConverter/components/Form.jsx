import { useCallback, useEffect, useRef, useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { useFetch } from "../useFetch";
import { currencyCodes } from "../currencyCodes";

function Form({ from, setFrom, to, setTo, amount, setAmount }) {
    const AmountInp = useRef();
    const startAnimation = useCallback((e) => {
        const pEl = e.previousElementSibling || e.target.previousElementSibling;
        pEl.classList.add("animate");
        pEl.classList.remove("animate-back");
    });

    const stopAnimation = useCallback((e) => {
        if (e.target.value.trim() === "") {
            const pEl = e.target.previousElementSibling;
            pEl.classList.remove("animate");
            pEl.classList.add("animate-back");
        }
    });

    useEffect(() => {
        const inputs = document.querySelectorAll(".anim-input");

        inputs.forEach((input) => {
            input.addEventListener("focus", startAnimation);
        });

        inputs.forEach((input) => {
            input.addEventListener("blur", stopAnimation);
        });

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("focus", startAnimation);
            });
            inputs.forEach((input) => {
                input.removeEventListener("blur", stopAnimation);
            });
        };
    }, [startAnimation]);

    useEffect(() => {
        if (amount > 1) {
            if (AmountInp.current) {
                console.log("Anim star");
                startAnimation(AmountInp.current);
            }
        }
    }, [amount]);

    const urlCountries =
        "https://restcountries.com/v3.1/independent?status=true";
    const { data, loading, error } = useFetch(urlCountries);

    return (
        <form
            className="bg-white rounded-lg padding grid gap-[2vh] md:grid-cols-[1fr,1fr,auto,1fr] items-center"
            style={{ width: "clamp(302px, 50vw, 768px)" }}
        >
            <label
                htmlFor="amountInp"
                className="block bg-white relative border border-gray-500 rounded-lg "
            >
                <p
                    className="anim-p rounded-md absolute  bg-white capitalize text-gray-300  pointer-events-none"
                    style={{ fontVariant: "small-caps" }}
                >
                    amount
                </p>
                <input
                    type="number"
                    name="amount"
                    id="amountInp"
                    className="anim-input px-2 py-2 rounded-lg w-full outline-none"
                    onChange={(e) => setAmount(e.target.value)}
                    ref={AmountInp}
                />
            </label>
            <label
                htmlFor="fromSelect"
                className="block bg-white relative border border-gray-500 rounded-lg "
            >
                <p
                    className="anim-p rounded-md absolute  bg-white capitalize text-gray-300  pointer-events-none"
                    style={{ fontVariant: "small-caps" }}
                >
                    from
                </p>
                <select
                    name="from"
                    id="fromSelect"
                    defaultValue={from}
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="anim-input px-2 py-2 rounded-lg w-full outline-none"
                >
                    <option value="" disabled></option>
                    {data?.map((item) => {
                        if (
                            currencyCodes.includes(
                                Object.keys(item.currencies)[0],
                            )
                        ) {
                            return (
                                <option
                                    key={item.area}
                                    value={Object.keys(item.currencies)[0]}
                                >
                                    {item.flag} - {item.name?.common} -
                                    {Object.keys(item.currencies)[0]}
                                </option>
                            );
                        }
                    })}
                </select>
            </label>

            <button
                type="button"
                className=" justify-self-center rotate-90 px-4 py-1 md:rotate-0  md:py-4 text-blue-400"
                onClick={(e) => {
                    setFrom(to);
                    setTo(from);
                }}
            >
                <FaExchangeAlt />
            </button>

            <label
                htmlFor="fromSelect"
                className="block bg-white relative border border-gray-500 rounded-lg "
            >
                <p
                    className="anim-p rounded-md absolute  bg-white capitalize text-gray-300  pointer-events-none"
                    style={{ fontVariant: "small-caps" }}
                >
                    to
                </p>
                <select
                    name="to"
                    id="toSelect"
                    defaultValue={to}
                    value={to}
                    onChange={(e) => {
                        setTo(e.target.value);
                        if (!amount) {
                            setAmount(1);
                        }
                    }}
                    className="anim-input px-2 py-2 rounded-lg w-full outline-none"
                >
                    <option value="" disabled></option>
                    {data?.map((item) => {
                        if (
                            currencyCodes.includes(
                                Object.keys(item.currencies)[0],
                            )
                        ) {
                            return (
                                <option
                                    key={item.area}
                                    value={Object.keys(item.currencies)[0]}
                                >
                                    {item.flag} - {item.name?.common} -
                                    {Object.keys(item.currencies)[0]}
                                </option>
                            );
                        }
                    })}
                </select>
            </label>
        </form>
    );
}

export default Form;
