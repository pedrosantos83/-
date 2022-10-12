import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@mui/material/Switch";

import "./Filter.scss";

const RocketFilter = () => {
    const dispatch = useDispatch();
    //  get dropdown value rockets
    const { valueDropDown, rocketCheckBox, rocketInput } = useSelector(
        (state) => state.filters.rockets
    );
    const [label] = useState({
        inputProps: { "aria-label": rocketCheckBox ? "activo" : "inactivo" },
    });
    console.log(rocketInput);
    // 3 handlers

    // 1 - inputHandler
    const inputHandler = (ev) => {
        const rocketName = ev.target.value;
        console.log(rocketName);
        dispatch({
            type: "rocketInputAction",
            payload: rocketName,
        });
    };
    // 2- dropdownHandler
    const dropdownHandler = (ev) => {
        const valueSelected = ev.target.value;
        console.log(valueSelected);
        dispatch({
            type: "valueDropDownAction",
            payload: valueSelected,
        });
        // final dispatch something Hint: check image
    };
    // 3 - checkhandler
    const checkHandler = (ev) => {
        const checkBox = ev.target.checked;
        console.log(checkBox);
        dispatch({
            type: "rocketCheckBoxAction",
            payload: checkBox,
        });
    };

    const clickHandlerFilter = () => {
        dispatch({
            type: "rocketFiltersActivate",
        });
    };
    const clickHandlerFilterReset = () => {
        dispatch({
            type: "rocketFiltersReset",
        });
    };

    return (
        <div style={{ padding: 20 }}>
            <div className="values-filter">
                <div className="values-filter__control">
                    {/* Dropdown */}
                    <select onChange={dropdownHandler}>
                        <option>selecte one value</option>
                        {valueDropDown.map((el) => {
                            if (el.selected) {
                                return (
                                    <option value={el.value} selected>
                                        {el.value}
                                    </option>
                                );
                            }
                            return <option value={el.value}>{el.value}</option>;
                        })}
                    </select>
                </div>
                {/*  input search*/}
                name:
                <input
                    type="text"
                    icon="search"
                    placeholder={rocketInput}
                    value={rocketInput}
                    onChange={inputHandler}
                />
                {/* Checkbox  */}
                <Switch
                    {...label}
                    checked={rocketCheckBox}
                    onChange={checkHandler}
                />
            </div>
            <button onClick={clickHandlerFilter}>use filters</button>
            <button onClick={clickHandlerFilterReset}>reset filters</button>
        </div>
    );
};
export default RocketFilter;
