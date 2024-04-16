export function validateEmail(email) {
    // Provided by edX Boot Camps, LLC
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
}

export function pathToPage(path) {
    let page = "About"
    if (path === "/portfolio") {
        page = "Portfolio";
    } else if (path === "/contact") {
        page = "Contact";
    } else if (path === "/resume") {
        page = "Resume";
    }
    return page
}