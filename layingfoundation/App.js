import React from "react";
import ReactDOM from "react-dom/client";
// react way
const heading = React.createElement("h1", {}, "this is the child element");
// to crete nested element in developer friendly way JSX is created by facebook library

// JSX
const jsxHeading = <h1> this is jsx not html ,it is not html inside js </h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);

// React Functional Component

const HeadingComponent = () => {
  return (
    <div>
      <h1> this is heading </h1>
    </div>
  );
};

const title = (
  <h1>
    Hello world
    <HeadingComponent />
  </h1>
);
const MultipleHeading = () => (
  <div>
    <h1> hello world </h1>
  </div>
);
// const fn =()=>{
//     return true
// }

// const fn = () => true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
