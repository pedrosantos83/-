import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";
const NotFoundPage = () => {
    return (
        <div className="wrapper">
            <div className="background-pic">
                <img src={"/images/fail404.jpg"} alt="error" />
                <div className="text">
                    <h1>404 NOT FOUND...FAIL</h1>
                    <h3>This page could not be found</h3>
                    <p style={{ textAlign: "center" }}>
                        <Link to="/">Go to Home </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
