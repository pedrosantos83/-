import axios from "axios";


// Utils
import { addFavorite, arrayUrl } from "./utils";

export async function getLaunches(dispatch) {
    return axios
        .get("https://api.spacexdata.com/v4/launches")

        .then(function (response) {
            dispatch({
                type: "launches",
                payload: addFavorite(response.data),
            });
        })
        .catch(function (error) {});
}

export async function getRockets(dispatch) {
    return axios

        .get(arrayUrl[Math.floor(Math.random() * arrayUrl.length)])

        .then(function (response) {
            dispatch({
                type: "rockets",
                payload: addFavorite(response.data),
            });
        })
        .catch(function (error) {
            if (error.response.status === 404) {
                window.location.href = "/error";
                return 
            } else {
                console.log("Error", error.message);
            }
        });
}

export async function getLaunchesById(dispatch, idLaunch) {
    return axios
        .get(`https://api.spacexdata.com/v4/launches/${idLaunch}`)
        .then(function (response) {
            dispatch({
                type: "launchIdAction",
                payload: response.data,
            });
            console(response);
        })
        .catch(function (error) {});
}

export async function getRocketsAndLaunches(dispatch) {
    await getLaunches(dispatch);
    await getRockets(dispatch);
    // await getLaunchesById(dispatch);
}
