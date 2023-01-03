import React from "react";
import Link from "react-router-dom";


const Nav = () => {
    return (
        <div className="nav">
            <div className="logo">
                <img src="" alt="">

                </img>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/video"></Link></li>
                    <li><Link to="/merch"></Link></li>
                    <li><Link to="/contact"></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;