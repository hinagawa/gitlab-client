import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar__div">
            <Link 
                to="/test_hinagawa/new-test-project">
                Dashboard
            </Link>
            <Link 
                to="/test_hinagawa/new-test-project/issue">
                Issues
            </Link>
            <Link 
                to="/test_hinagawa/new-test-project/merge-requests">
                Merge requests
            </Link>
            <Link 
                to="/test_hinagawa/new-test-project/members">
                Members
            </Link>
        </div>
    )
}

export default Sidebar;