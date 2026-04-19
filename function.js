function toggleStyleSheet() {
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    //gets the whole html
    const style = document.getElementById("mainStyleSheet")

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    //gets the light.css
    const current = style.getAttribute("href");
    let new_style;

    // 1 (c) Determine new stylesheet file name
    if (current == "CSS/style1.css") {
        new_style = "CSS/style2.css";
        window.location.href = "welcome.html";
    }
    else {
        new_style = "CSS/style1.css";
    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    //sets href -> new_style
    style.setAttribute("href", new_style);
    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    //stores the new style in local storage
    localStorage.setItem("href", new_style);
}


window.onload = function () {
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    //get the  href="" and stores in style variable

    const style = localStorage.getItem("href");

    // 2 (b) get html style element by ID
    //gets the whole html , essentially the whole link
    const value_ = document.getElementById("mainStyleSheet");

    // 2 (c) replace href attribute of html element.
    //changes the link href -> style so that it stays
    if (style) {
        value_.setAttribute("href", style);
    }

}


