import React from "react";
import ReactDOM from "react-dom/client";
// react way
const heading = React.createElement("h1", {}, "this is the child element");
// to crete nested element in developer friendly way JSX is created by facebook library

// JSX
const jsxHeading = <h1> this is jsx not html ,it is not html inside js </h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHeading);
