import React from "react";
import { useSelector } from "react-redux";
import StarBorderIcon from "@mui/icons-material/StarBorder";

// Styles
import "./Modal.scss";

// API
import { getLaunches } from "../../services/Api";

// Selectors
import { getLaunchFavoriteById } from "../../store/selectors";

const Modal = (props) => {
    const { launchIdClicked, dispatch } = props;
    //selector
    const { favorite } = useSelector((state) =>
        getLaunchFavoriteById(state, launchIdClicked)
    );
    //favorite handler
    const addFav = () => {
        getLaunches();
        dispatch({
            type: "addFavoriteLaunch",
            payload: launchIdClicked,
        });
    };

    if (!props.open) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <StarBorderIcon
                    color={favorite ? "success" : "inherit"}
                    onClick={addFav}
                />
                <h1 className="modal-header">{props.launcheInfo.name}</h1>
                <img
                    src={props.launcheInfo.links.patch.small}
                    alt="launch-logo"
                />
                <div className="modal-body">
                    {/* teste{props.launchId.id} */}
                    <br />
                    Name:
                    {props.launcheInfo.name}
                    <br />
                    Description
                    {props.launcheInfo.details}
                    <br />
                    Rocket_Number: {props.launcheInfo.flight_number}
                    <br />
                    Success:
                    {props.launcheInfo.success
                        ? props.launcheInfo.success.toString()
                        : "false"}
                </div>
                <button onClick={() => props.onClose()} className="close-btn">
                    CLOSE
                </button>
            </div>
        </div>
    );
};
export default Modal;
