import React from "react";
import Sidebar from "../../components/sidebar/sidebar";

import "./merge-requests-page.css";

import MergeList from "../../components/merge-list";
import Header from "../../components/header";

function MergeRequestsPage() {
    return (
        <>
            <Header />
            <div className="merge__main">
                <Sidebar />
                <div className="merge__list">
                    <MergeList />
                </div>
            </div>
        </>
    )
}

export default MergeRequestsPage