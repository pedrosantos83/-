import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Card,
    CardMedia,
    Grid,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";
//Styles
import "./LaunchList.scss";
// API
import { getLaunchesById } from "../../services/Api";
//Components
import LaunchFilter from "../Filter/FilterLaunch";
import Modal from "../modal/Modal";

const LaunchesList = (props) => {
    const dispatch = useDispatch();
    //modal
    const launchInfoClicked = useSelector((state) => state.launchModal);
    const isModalActive = useSelector((state) => state.isModalOpen);
    const getLaunchId = useSelector((state) => state.launchId);
    const launchesIdFromModal = useSelector((state) => state.launchModal.id);
      //Filter
      const [filteredValue, setFilteredValue] = useState([]);

      const filterChangeHandler = (selectedValue) => {
          setFilteredValue(selectedValue);
      };
    
    
    
    //handlers
    const modalClickHandler = (launch) => {
        getLaunchesById(launch);
        dispatch({
            type: "clickModal",
            payload: launch,
        });
    };
    return (
        <div className="box">
            <LaunchFilter
                selected={filteredValue}
                onChangeFilter={filterChangeHandler}
            />
            <img src="/images/blue-sky.jpg" id="df" alt="launch-background" />
            <Grid className="container" container spacing={4}>
                <Modal
                    onClose={() =>
                        dispatch({
                            type: "closeModal",
                        })
                    }
                    dispatch={dispatch}
                    launcheInfo={launchInfoClicked}
                    //modal with launch id?
                    launchId={getLaunchId}
                    open={isModalActive}
                    launchIdClicked={launchesIdFromModal}
                />
                {props.error ? (
                    <div>{props.error}</div>
                ) : (
                    props.launches.map((launch, index) => (
                        <Grid
                            className="card"
                            item
                            xs={2}
                            key={`card-${index}`}
                        >
                            <Card
                                variant="outlined"
                                sx={{ minWidth: 200, maxHeight: 300 }}
                            >
                                <CardContent>
                                    <Typography
                                        sx={{ fontSize: 14 }}
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        Launches
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        paddingtop="56.25%"
                                        margintop="30"
                                        image={launch.links.patch.small}
                                        alt="launch"
                                        style={{
                                            height: "100px",
                                            width: "100px",
                                            dislpay: "inline-block",
                                        }}
                                    />
                                    <Typography
                                        sx={{ fontSize: 13, fontWeight: 700 }}
                                        variant="h5"
                                        component="div"
                                    >
                                        {launch.name}
                                    </Typography>
                                    <Typography
                                        sx={{ mb: 1.5 }}
                                        color="text.secondary"
                                    >
                                        id:{launch.id}
                                    </Typography>
                                    <Typography variant="body2">
                                        Year:
                                        {new Date(
                                            launch.date_local
                                        ).getFullYear()}
                                        <br />
                                        Success:
                                        {launch.success
                                            ? launch.success.toString()
                                            : "false"}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        onClick={() => {
                                            modalClickHandler(launch);
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
export default LaunchesList;
