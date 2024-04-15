import React from "react";

function Selection({ id, options }) {
    return (
        <select className="py-1 px-2 capitalize">
            <option value="">Any {id}</option>
            {options?.map((option, index) => (
                <option key={index} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}

export default Selection;
