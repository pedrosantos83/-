import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="bg-img">
        <div className="container">
            <div className="nav-link">     
                <ul>
                <li>
                        <Link to="/">🚀Home</Link>
                    </li>
                    <li>
                        <Link to="/launches">🚀Launches</Link>
                    </li>
                    <li>
                        <Link to="/rockets">🚀Rockets</Link>
                    </li>
                </ul>
            </div>
            {/* <img src="\images\spacex-intro.png" /> */}
        </div>
        </div>
   );
};

export default Navbar;
