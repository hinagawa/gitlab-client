import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./sign-in/sign-in";
import Main from "./main/main";
import GroupsPage from "./groups-page/groups-page"

const Routing = () => {
    return (
        <Router>
            <Route path="/sign-in" component={SignIn} exact />
            <Route path="/" component={Main} exact />
            <Route path="/groups" component={GroupsPage} exact />
        </Router>
    )
}

export default Routing;