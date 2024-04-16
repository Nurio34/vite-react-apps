import React from "react";
import { useDispatch } from "react-redux";
import {
    setCategory,
    setDifficulty,
    setType,
    setCategorySetting,
    setDifficultySetting,
    setTypeSetting,
} from "../../../../../Store/quiz";

function Selection({ id, options }) {
    const dispatch = useDispatch();

    const onChange = (e) => {
        switch (id) {
            case "category":
                dispatch(setCategory(e.target.value));
                dispatch(setCategorySetting(e.target.value));
                break;
            case "difficulty":
                dispatch(setDifficulty(e.target.value));
                dispatch(setDifficultySetting(e.target.value));

                break;
            case "type":
                dispatch(setType(e.target.value));
                dispatch(setTypeSetting(e.target.value));

                break;
            default:
                break;
        }
    };

    return (
        <select className="py-1 px-2 capitalize" onChange={onChange}>
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
