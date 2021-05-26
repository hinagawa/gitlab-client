import React from "react";

import "./dashboard-page.css";

import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header";

function DashboardPage() {
    return (
        <div>
            <Header />
            <Sidebar />
        </div>
    )
}

export default DashboardPage;