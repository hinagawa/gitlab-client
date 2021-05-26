import React from "react";
import Sidebar from "../../components/sidebar/sidebar";

import "./merge-requests-page.css";

import MergeList from "../../components/merge-list";
import Header from "../../components/header/header";

function MergeRequestsPage() {
    return (
        <>
            <Header />
            <div className="merge__main">
                <Sidebar />
                
                <div className="merge__list">
                <div className="div__title">
                    <p>Date</p>
                    <p>Message</p>
                    <p>Author</p>
                    <p>Count of commits</p>
                </div>
                    <MergeList />
                </div>
            </div>
        </>
    )
}

export default MergeRequestsPage