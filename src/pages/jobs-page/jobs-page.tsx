import React from "react";

import "./jobs-page.css";

import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";
import JobsList from "../../components/jobs-list";

function DashboardPage() {
    return (
        <div>
            <Header />
            <div className="pipelines__main">
                <Sidebar />
                <div className="pipelines__list">
                    <div className="div__title">
                        <p>Status</p>
                        <p>Name</p>
                        <p>Stage</p>
                        <p>Tags</p>
                        <p>Job</p>
                    </div>
                    <JobsList />
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;