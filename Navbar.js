import React from "react";
const Navbar = () => {
    return (
        <div className="nav-menu">
            <div className="menu">
                <nav>
                        <ul>
                            <li>
                            <div><img class="img1" src="favicon.ico "/></div>
                            </li>
                            <li><a href="http://localhost:3000/">HOME</a></li>
                            <li><a href="http://localhost:3000/">ABOUT</a></li>
                            <li><a href="http://localhost:3000/">PORTFOLIO</a></li>
                            <li><a href="http://localhost:3000/">CONTACT</a></li>
                        </ul>
                </nav>
            </div>
        </div>
    );
};
export default Navbar;