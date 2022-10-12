import React from "react";
import { useSelector } from "react-redux";
import StarBorderIcon from "@mui/icons-material/StarBorder";


// Styles
import "./Modal.scss";

// API
import { getLaunchesById, getRockets } from "../../services/Api";

// Selectors
import { getFavoriteById, getAllLaunchesByRocket } from "../../store/selectors";

const ModalRocket = (props) => {
    const { rocketsInfo, launchId, rocketIdClicked, dispatch } = props;
    const { id } = rocketsInfo;
    // hooks
    const { favorite } = useSelector((state) =>
        getFavoriteById(state, rocketIdClicked)
    );
    const allLaunchesByRocket = useSelector((state) =>
        getAllLaunchesByRocket(state, id)
    );

    // Handlers
    const getInfoDetailLaunchHandler = (launcheInfo) => {
        getLaunchesById(dispatch, launcheInfo.id);
    };
    //favorite handler
    const addFav = () => {
        getRockets();
        dispatch({
            type: "addFavoriteRocket",
            payload: rocketIdClicked,
        });
    };

    if (!props.open) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="header">
                    <StarBorderIcon
                        color={favorite ? "success" : "inherit"}
                        onClick={addFav}
                    />
                    <h1 className="modal-header"> {rocketsInfo.name}</h1>
                </div>
                <img src={rocketsInfo.flickr_images} width="300px" alt="rocket-pics"  />
                <div className="modal-body">
                    <br />
                    Id:
                    {rocketsInfo.id}
                    <br />
                    Description:
                    {rocketsInfo.description}
                    <br />
                    Active:
                    {rocketsInfo.active
                        ? rocketsInfo.active.toString()
                        : "false"}
                </div>
                <div className="launches-btn-wraper">
                    <h1>LAUNCHES:</h1>
                    {allLaunchesByRocket.map((launch) => {
                        return (
                            <button
                                key={`launch-key-${launch.id}`}
                                onClick={() =>
                                    getInfoDetailLaunchHandler(launch)
                                }
                            >
                                {launch.name}
                            </button>
                        );
                    })}
                </div>
                <div>
                    <h1>Details from launch Clicked</h1>
                    <h2>name: {launchId?.name ? launchId.name : "-"}</h2>
                    <h2>outros: {launchId?.name ? launchId : "-"}</h2>
                </div>
                <button onClick={() => props.onClose()} className="close-btn">
                    CLOSE
                </button>
            </div>
        </div>
    );
};
export default ModalRocket;
