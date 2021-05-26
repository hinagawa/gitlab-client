import React from "react";

import "./members-page.css";

import MemberList from "../../components/member-list";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";

function MembersPage() {
    return (
        <>
            <Header />
            <div className="member__main">
                <Sidebar />
                <div className="member__list">
                    <MemberList />
                </div>
            </div>
        </>
    )
}

export default MembersPage;