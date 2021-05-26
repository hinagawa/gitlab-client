import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./sign-in/sign-in";
import Main from "./main/main";
import DashboardPage from "./dashboard-page/dashboard-page";
import GroupPage from "./group-page/group-page";
import MergePage from "./merge-requests-page/merge-requests-page";
import IssuesPage from "./issues-page/issues-page";
import MembersPage from "./members-page/members-page";

const Routing = () => {
    return (
        <Router>
            <Route path="/sign-in" component={SignIn} exact />
            <Route path="/" component={Main} exact />
            <Route path="/test_hinagawa/new-test-project" component={DashboardPage} exact />
            <Route path="/test_hinagawa" component={GroupPage} exact />
            <Route path="/test_hinagawa/new-test-project/merge-requests" component={MergePage} exact />
            <Route path="/test_hinagawa/new-test-project/issue" component={IssuesPage} exact />
            <Route path="/test_hinagawa/new-test-project/members" component={MembersPage} exact />
        </Router>
    )
}

export default Routing;