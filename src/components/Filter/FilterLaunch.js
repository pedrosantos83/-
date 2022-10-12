import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@mui/material/Switch";

const LaunchFilter = () => {
    const dispatch = useDispatch();
    const { launchCheckBox, numberInput } = useSelector(
        (state) => state.filters.launches
    );
    const [label] = useState({
        inputProps: { "aria-label": launchCheckBox ? "activo" : "inactivo" },
    });
//handlers
    const inputHandler = (ev) => {
        const launchNumber = ev.target.value;
        console.log(launchNumber);
        dispatch({
            type: "numberInputAction",
            payload: launchNumber,
        });
    };
    const checkHandler = (ev) => {
        const checkBox = ev.target.checked;
        console.log(checkBox);
        dispatch({
            type: "launchCheckBoxAction",
            payload: checkBox,
        });
    };
    const clickHandlerFilter = () => {
        dispatch({
            type: "launchFiltersActivate",
        });
    };
    const clickHandlerFilterReset = () => {
        dispatch({
            type: "launchFiltersReset",
        });
    };
    return (
        <div style={{ padding: 20 }}>
            <div className="values-filter">
                {/*  input search*/}
                number:
                <input
                    type="text"
                    icon="search"
                    placeholder={numberInput}
                    value={numberInput}
                    onChange={inputHandler}
                />
                {/* Checkbox  */}
                <Switch
                    {...label}
                    checked={launchCheckBox}
                    onChange={checkHandler}
                />
            </div>
            <button onClick={clickHandlerFilter}>use filters</button>
        <button onClick={clickHandlerFilterReset}>reset filters</button>
        </div>
    );
};
export default LaunchFilter;
