import React from "react";

import "./dashboard-page.css";

import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";
import PipelinesList from "../../components/pipelines-list";

function DashboardPage() {
    return (
        <div>
            <Header />
            <div className="pipelines__main">
                <Sidebar />
                <div className="pipelines__list">
                    <div className="div__title">
                        <p>Status</p>
                        <p>Link</p>
                        <p>Author</p>
                    </div>
                    <PipelinesList />
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;