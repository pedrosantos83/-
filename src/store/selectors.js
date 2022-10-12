// Rockets;

export const getFavoriteById = (state, rocketIdClicked) =>
    state.rockets.find((rocket) => rocket.id === rocketIdClicked) || {
        favorite: false,
    };
export const getAllLaunchesByRocket = (state, id) =>
    state.launches.filter((launch) => launch.rocket === id);
    
    
    
    //Launches
    export const getLaunchFavoriteById = (state, launchIdClicked) =>
    state.launches.find((launch) => launch.id === launchIdClicked) || {
        favorite: false,
    };