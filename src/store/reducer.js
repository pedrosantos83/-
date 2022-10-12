const initialState = {
    rockets: [],
    launches: [],
    launchId: [],
    filters: {
        rockets: {
            valueDropDown: [
                {
                    value: 6700000,
                    selected: false,
                },
                {
                    value: 50000000,
                    selected: false,
                },
                {
                    value: 7000000,
                    selected: false,
                },
                {
                    value: 1100000,
                    selected: false,
                },
            ],
            rocketCheckBox: false,
            rocketInput: "",
            showFilters: false,
        },
        launches: {
            launchCheckBox: false,
            numberInput: "",
            showFilters: false,
        },
    },
    launchModal: {},
    isModalOpen: false,
    // favorites: {
    //     rockets: {
    //        favorite: false,
    //      },
    // },
};
const spaceReducer = (state = initialState, action) => {
    // console.log(action, state);
    if (action.type === "launches") {
        return {
            ...state,
            launches: action.payload,
        };
    }

    if (action.type === "rockets") {
        return {
            ...state,
            rockets: action.payload,
        };
    }
    if (action.type === "clickModal") {
        return {
            ...state,
            launchModal: action.payload,
            isModalOpen: true,
        };
    }
    if (action.type === "closeModal") {
        return {
            ...state,

            isModalOpen: false,
        };
    }
    if (action.type === "launchIdAction") {
        return {
            ...state,
            launchId: action.payload,
        };
    }
    if (action.type === "rocketInputAction") {
        return {
            ...state,
            filters: {
                ...state.filters,
                rockets: {
                    ...state.filters.rockets,
                    rocketInput: action.payload,
                },
            },
        };
    }
    if (action.type === "valueDropDownAction") {
        return {
            ...state,
            filters: {
                ...state.filters,
                rockets: {
                    ...state.filters.rockets,
                    valueDropDown: state.filters.rockets.valueDropDown.map(
                        (el) => {
                            return {
                                value: el.value,
                                selected:
                                    el.value.toString() === action.payload,
                            };
                        }
                    ),
                },
            },
            valueDropDown: action.payload,
        };
    }
    if (action.type === "rocketCheckBoxAction") {
        return {
            ...state,
            filters: {
                ...state.filters,
                rockets: {
                    ...state.filters.rockets,
                    rocketCheckBox: action.payload,
                },
            },
        };
    }
    if (action.type === "rocketFiltersActivate") {
        return {
            ...state,
            filters: {
                ...state.filters,
                rockets: {
                    ...state.filters.rockets,
                    showFilters: true,
                },
            },
        };
    }
    if (action.type === "rocketFiltersReset") {
        return {
            ...state,
            filters: {
                ...initialState.filters,
            },
        };
    }
    if (action.type === "launchCheckBoxAction") {
        return {
            ...state,
            filters: {
                ...state.filters,
                launches: {
                    ...state.filters.launches,
                    launchCheckBox: action.payload,
                },
            },
        };
    }
    if (action.type === "numberInputAction") {
        return {
            ...state,
            filters: {
                ...state.filters,
                launches: {
                    ...state.filters.launches,
                    numberInput: action.payload,
                },
            },
        };
    }
    if (action.type === "launchFiltersActivate") {
        return {
            ...state,
            filters: {
                ...state.filters,
                launches: {
                    ...state.filters.launches,
                    showFilters: true,
                },
            },
        };
    }
    if (action.type === "launchFiltersReset") {
        return {
            ...state,
            filters: {
                ...initialState.filters,
            },
        };
    }
    if (action.type === "addFavoriteRocket") {
        return {
            ...state,
            rockets: state.rockets.map((rocket) => {
                const isEqual = rocket.id === action.payload;
                return {
                    ...rocket,
                    favorite: isEqual && !rocket.favorite,
                };
            }),
        };
    }
    if (action.type === "addFavoriteLaunch") {
        return {
            ...state,
            launches: state.launches.map((launch) => {
                const isEqual = launch.id === action.payload;
                return {
                    ...launch,
                    favorite: isEqual && !launch.favorite,
                };
            }),
        };
    }
    return {
        ...state,
    };
};

export default spaceReducer;
