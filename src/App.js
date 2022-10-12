import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRocketsAndLaunches } from "./services/Api";
import { Route, Routes, Outlet } from "react-router-dom";
import LaunchesList from "./components/LaunchList/LaunchList";
import RocketsList from "./components/RocketList/RocketList";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFoundPage from "./components/NotFound/NotFoundPage";

function App() {
    // const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const launches = useSelector((state) => {
        const hasFilterActive = state.filters.launches.showFilters;
        const launches = state.launches;
        if (hasFilterActive) {
            const isActive = state.filters.launches.launchCheckBox;
            const launchInput = state.filters.launches.numberInput;
            return launches.filter((launches) => {
                return (
                    launches.success === isActive &&
                    launches.flight_number.toString().includes(launchInput)
                );
            });
        }

        return launches;
    });
    const rockets = useSelector((state) => {
        const hasFilterActive = state.filters.rockets.showFilters;
        const rockets = state.rockets;
        if (hasFilterActive) {
            const isActive = state.filters.rockets.rocketCheckBox;
            const { value: maxValue } =
                state.filters.rockets.valueDropDown.find(
                    (el) => el.selected
                ) || { value: 9000000000000 };
            const inputSearch = state.filters.rockets.rocketInput;
            return rockets.filter((rocket) => {
                return (
                    rocket.cost_per_launch <= maxValue &&
                    rocket.active === isActive &&
                    rocket.name.includes(inputSearch)
                );
            });
        }
        return rockets;
    });
    // const launchId = useSelector((state) => state.rockets);
    useEffect(() => {
        getRocketsAndLaunches(dispatch);
    }, []);
    return (
        <div className="app">
            {/* <Navbar /> */}
            <Routes>
                <Route
                    element={
                        <>
                            <Navbar />
                            <Outlet />
                        </>
                    }
                >
                    <Route exact path="/" element={<Home />} />
                    <Route
                        path="/launches"
                        element={<LaunchesList launches={launches} />}
                    />
                    <Route />
                    <Route
                        path="/rockets"
                        element={<RocketsList rockets={rockets} />}
                    />
                </Route>
                <Route path="/error" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
