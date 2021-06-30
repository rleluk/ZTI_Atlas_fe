import history from "./history";

const logout = () => {
    localStorage.removeItem("authToken");
    history.push("/");
}

const checkAuthorization = () => {
    return localStorage.getItem("authToken") ? true : false;
}

export const authenticationService = {
    logout,
    checkAuthorization,
    get authToken () { return localStorage.getItem("authToken"); },
};