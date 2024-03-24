import React from "react";

function Result({ amount, result = {}, from, to }) {
    return (
        <div className=" bg-white padding-sm rounded-md">
            {Object.entries(result).length > 1 ? (
                "Loading.."
            ) : (
                <div>
                    {amount} {from} is{" "}
                    {(
                        parseInt(amount) * parseInt(Object.values(result))
                    ).toFixed(2)}{" "}
                    {to}
                </div>
            )}
        </div>
    );
}

export default Result;
