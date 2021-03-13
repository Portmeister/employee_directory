import React from "react";
import "./style.css";

function Header() {
    return (
        <div className = "wrapper">
            <div className = "title">
                Employee Directory
            </div>
            <br />
            <div className = "tagline">
                All Employees, All the Time!
            </div>
        </div>
    );
}

export default Header;