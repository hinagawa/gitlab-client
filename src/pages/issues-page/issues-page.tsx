import React from "react";

import "./issues-page.css";

import IssueList from "../../components/issue-list";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";

function IssuesPage() {
    return (
        <>
            <Header />
            <div className="issue__main">
                <Sidebar />
                <div className="issue__list">
                <div className="div__title">
                    <p>Issue</p>
                    <p>Status</p>
                    <p>Created at</p>
                    <p>Author</p>
                </div>
                    <IssueList />
                </div>
            </div>
        </>
    )
}

export default IssuesPage;