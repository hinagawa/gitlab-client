import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./sign-in/index";

const Routing = () => {
    return (
        <Router>
            <Route path="/" component={SignIn} exact />
        </Router>
    )
}

export default Routing;