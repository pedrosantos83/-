export const addFavorite = (data) =>
    data.map((item) => ({
        ...item,
        favorite: false,
    }));

   export const arrayUrl = ["https://api.spacexdata.com/v4/rockets","https://api.spacexdata.com/v4/rocketes","https://api.spacexdata.com/v4/rocketos"]

