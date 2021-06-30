import React from "react";
import { Redirect, Route } from "react-router-dom";
import { authenticationService } from "../services/authentication"

const PrivateRoute = (props) => {
    return authenticationService.checkAuthorization() ? (
        <Route exact={props.exact} path={props.path} component={props.component} />
    ) : ( 
        <Redirect to="/login" />
    )
};

export default PrivateRoute;