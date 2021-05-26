import React from "react";

import "./issues-page.css";

import IssueList from "../../components/issue-list";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header";

function IssuesPage() {
    return (
        <>
            <Header />
            <div className="issue__main">
                <Sidebar />
                <div className="issue__list">
                    <IssueList />
                </div>
            </div>
        </>
    )
}

export default IssuesPage;