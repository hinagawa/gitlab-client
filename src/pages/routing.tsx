import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./sign-in/sign-in";
import Main from "./main/main";
import ProjectPage from "./project-page/project";
import GroupPage from "./group-page/group-page";

const Routing = () => {
    return (
        <Router>
            <Route path="/sign-in" component={SignIn} exact />
            <Route path="/" component={Main} exact />
            <Route path="/test_hinagawa/new-test-project" component={ProjectPage} exact />
            <Route path="/test_hinagawa" component={GroupPage} exact />
        </Router>
    )
}

export default Routing;