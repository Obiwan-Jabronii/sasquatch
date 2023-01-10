import React from "react";
import {Link} from "react-router-dom";


const Nav = () => {
    return (
        <div className="nav">
            <div className="logo">
                <img src="" alt="">

                </img>
            </div>
            <div>
                <ul className="links">
                    <li className="mx-3 link"><Link to="/video">Videos</Link></li>
                    <li className="mx-3 link"><Link to="/merch">Merch</Link></li>
                    <li className="mx-3 link"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;