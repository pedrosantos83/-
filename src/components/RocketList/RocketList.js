import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Card,
    Grid,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";

//Styles
import "./RocketList.scss";

// API
import { getLaunchesById } from "../../services/Api";

// selectors
// actions
// thunks

// Components
import RocketFilter from "../Filter/FilterRocket";
import ModalRocket from "../modal/ModalRocket";

const RocketsList = (props) => {
    const dispatch = useDispatch();
    const rocketInfoClicked = useSelector((state) => state.launchModal);
    const getLaunchId = useSelector((state) => state.launchId);
    const isModalActive = useSelector((state) => state.isModalOpen);
    const rocketIdFromModal = useSelector((state) => state.launchModal.id);

    //Filter
    const [filteredValue, setFilteredValue] = useState([]);

    // Handlers
    const filterChangeHandler = (selectedValue) => {
        setFilteredValue(selectedValue);
    };

    const modalClickHandler = (rocket) => {
        getLaunchesById();
        dispatch({
            type: "clickModal",
            payload: rocket,
        });
    };

    return (
        <div className="box">
            <RocketFilter
                selected={filteredValue}
                onChangeFilter={filterChangeHandler}
            />
            <img src="/images/star-sky.jpg" id="df" alt="rocket-background" />
            <Grid
                className="container"
                container
                spacing={4}
            >
                <ModalRocket
                    onClose={() =>
                        dispatch({
                            type: "closeModal",
                        })
                    }
                    dispatch={dispatch}
                    rocketsInfo={rocketInfoClicked}
                    launchId={getLaunchId}
                    open={isModalActive}
                    rocketIdClicked={rocketIdFromModal}
                />
                {props.error ? (
                    <div>{props.error}</div>
                ) : (
                    props.rockets.map((rocket, index) => (
                        <Grid container
                            className="card"
                            item
                            xs={3}
                            key={`card-${index}`}
                        >
                            <Card variant="outlined" sx={{ minWidth: 200 }}>
                                <CardContent>
                                    <Typography
                                        sx={{ fontSize: 14 }}
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        rocket
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="auto"
                                        paddingtop="56.25%"
                                        margintop="30"
                                        image={rocket.flickr_images}
                                        alt="rocket"
                                        style={{
                                            height: "100px",
                                            width: "100px",
                                            dislpay: "inline-block",
                                        }}
                                    />
                                    <Typography variant="h5" component="div">
                                        {rocket.name}
                                    </Typography>
                                    <Typography
                                        sx={{ mb: 1.5 }}
                                        color="text.secondary"
                                    >
                                        Country:{rocket.country}
                                    </Typography>
                                    <Typography variant="body2">
                                        Value:{rocket.cost_per_launch}
                                        <br />
                                        Active:
                                        {rocket.active
                                            ? rocket.active.toString()
                                            : "false"}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button
                                        onClick={() => {
                                            modalClickHandler(rocket);
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>
        </div>
    );
};

export default RocketsList;
